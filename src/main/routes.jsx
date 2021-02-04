import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import quadrinhos from '../quadrinhos/quadrinhos'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/quadrinhoss' component={quadrinhos} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/quadrinhoss' />
    </Router>
)