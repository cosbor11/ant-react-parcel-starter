import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable';
import { Router as ReactRouter, Switch, Route } from 'react-router';
import {createBrowserHistory} from 'history'
import {Helmet} from 'react-helmet'

const Loading = () => (<div>Loading...</div>)

const history = createBrowserHistory()

const HomePage = Loadable({loader: () => import('./pages/HomePage'), loading: Loading })
const AboutPage = Loadable({loader: () => import('./pages/AboutPage'), loading: Loading })

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
    </Switch>
)

const BrowserRouter = ({children}) => (<ReactRouter history={history}>{children}</ReactRouter> )

ReactDOM.render(
    <BrowserRouter>
    <Helmet>
        <title>title placeholder</title>
        <meta name="description" content="content placeholder" />
    </Helmet>
    <Router />
  </BrowserRouter>, document.getElementById('root')
)