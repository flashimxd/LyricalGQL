import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

class songList extends Component{
    renderSong() {
        const { songs } = this.props.data
        return songs.map(song => {
            return (
                <li key={song.id} className="collection-item">{song.title}</li>
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

const query = gql`
  {
    songs {
        id
      title
    }
  }
`
export default graphql(query)(songList)