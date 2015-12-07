import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Welcome from './components/welcome';
import About from './components/about';
import TeamMembers from './components/team-members';

render((
    <Router>
        <Route path="/" component={Welcome}>
            <Route path="about" component={About}/>
            <Route path="team-members" component={TeamMembers}/>
        </Route>
    </Router>
), document.getElementById('hello-react'))
