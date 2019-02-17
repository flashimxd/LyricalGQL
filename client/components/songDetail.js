import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import { Link } from 'react-router'
import fetchSong from '../queries/fetchSong'
import LyricCreate from './lyricCreate'
import LyricList from './lyricList'

class songDetail extends Component {
    render(){
        const { song } = this.props.data
        const { id } = this.props.params

        if(!song) return (<div>Loading...</div>)

        return (
            <div>
                <Link to='/'>Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics} />
                <LyricCreate songId={id} />
            </div>
        )
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(songDetail)