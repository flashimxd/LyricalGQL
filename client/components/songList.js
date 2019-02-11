import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSongs'

class songList extends Component{
    onSongDelete(id) {
        this.props.mutate({ variables: { id } })
            .then(() => this.props.data.refetch())
    }
    renderSong() {
        const { songs } = this.props.data
        return songs.map(({ id, title }) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i className='material-icons' onClick={() => this.onSongDelete(id)}>
                        delete
                    </i>
                </li>
            )
        })
    }   
    render(){
        const { loading } = this.props.data

        if(loading) return <div>Loading...</div>

        return (
            <div>
                <ul className="collection" >
                    {this.renderSong()}
                </ul>
                <Link to="/songs/new" className="btn btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const mutation = gql`
    mutation DeleteSong($id: ID){
        deleteSong(id: $id){
            id
        }
    }
` 

export default graphql(mutation)(
    graphql(query)(songList)
)