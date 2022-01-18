import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';


import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const AppWithRouterAccess = () => {

    
    return (
        <>
          
            <Box style={{ marginTop: 64 }}>
                <Switch>
                    <Route exact path='/' component={Home} />

                    
                    <Route exact path='/details/:id' component={DetailView} />
                    <Route exact path='/create/:category?' component={CreatePost} />
                    <Route exact path='/update/:id' component={Update} />

                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Box>
            </>
    )
}

export default AppWithRouterAccess;