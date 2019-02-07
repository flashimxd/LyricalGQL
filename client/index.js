import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import SongList from './components/songList'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/app'
import songList from './components/songList'
import songCreate from './components/songCreate'

const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={songList} />
            <Route path="songs/new" component={songCreate} />
          </Route>
        </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
