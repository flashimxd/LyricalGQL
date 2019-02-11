import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchSongs'

class songCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { title: '' }
    }
    submitHandler(evt) {
        evt.preventDefault()
        const { mutate } = this.props
        const { title } = this.state
        
        mutate({
            variables: { title },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/'))
    }
    render(){
        const { title } = this.state
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <label>Song Title:</label>
                    <input value={title} onChange={evt => this.setState({ title: evt.target.value })} />
                </form>
            </div>
        )
    }
}

const mutations = gql`
    mutation AddSong($title: String) {
        addSong(title: $title){
            title
        }
    }
`
export default  graphql(mutations)(songCreate)