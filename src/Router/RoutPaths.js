// this file holds all the url paths
import React from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup'
import ChatArea from '../components/chat/ChatArea'
import Landing from '../components/LandingPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const RoutePaths = ({ authenticated }) => {
    return ( 
        <Switch>
            <Route exact path="/login">
                { authenticated ? <Redirect to="/chat" /> : <Login /> }
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/chat">
                { authenticated ? <ChatArea /> : <Redirect to="/login" /> }
            </Route>
            <Route exact path="/">
                <Landing />
            </Route>
        </Switch>
     );
}

function mapStateToProps(store) {
    return {
        authenticated: store.auth.is_auth, 
    }
}
 
export default connect(mapStateToProps)(RoutePaths)