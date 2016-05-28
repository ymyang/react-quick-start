'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/inbox'>Inbox</Link></li>
                </ul>
            </div>
        );
    }
}

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>About</h3>;
    }
}

class Inbox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || 'Welcome to your Inbox'}
            </div>
        );
    }
}

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>Message {this.props.params.id}</h3>;
    }
}

render((
    <Router>
        <Route path='/' component={App}>
            <Route path='about' component={About} />
            <Route path='inbox' component={Inbox}>
                <Route path='message/:id' component={Message} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));