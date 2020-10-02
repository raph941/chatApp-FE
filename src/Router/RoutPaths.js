// this file holds all the url paths
import React from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup'
import ChatArea from '../components/chat/ChatArea'
import Landing from '../components/LandingPage'
import { Route, Switch } from 'react-router-dom'

const RoutePaths = () => {
    return ( 
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/chat">
                <ChatArea />
            </Route>
            <Route exact path="/">
                <Landing />
            </Route>
        </Switch>
     );
}
 
export default RoutePaths;