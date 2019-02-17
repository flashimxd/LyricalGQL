import React, { Component } from "react";
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class lyricCreate extends Component{
    constructor(props){
        super(props)
        this.state = {content: ''}
    }
    submitHandler(evt) {
        evt.preventDefault()
        const {content} = this.state
        const {songId} = this.props
        this.props.mutate({
            variables: {
                content,
                songId
            }
        }).then(() => this.setState({content: ''}))
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <label> Add Lyric</label>
                    <input value={this.state.content} onChange={evt => this.setState({ content: evt.target.value })}/>
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content ,songId: $songId) {
            id
            lyrics{
                id
                content
                likes
            }
        }
    }
`
export default graphql(mutation)(lyricCreate)
