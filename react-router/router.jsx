'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, Redirect, hashHistory } from 'react-router';
//import createHashHistory from 'history/lib/createHashHistory'

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
                {this.props.children}
            </div>
        );
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Welcome to the App!</div>;
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

let routerConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Dashboard },
        childRoutes: [
            { path: 'about', component: About },
            {
                path: 'inbox',
                component: Inbox,
                childRoutes: [
                    { path: '/messages/:id', component: Message },
                    {
                        path: 'messages/:id',
                        onEnter: (nextState, replaceState) => {
                            replaceState(null, '/messages/' + nextState.params.id);
                        }
                    }
                ]
            }
        ]

    }
];

render(<Router history={hashHistory} routes={routerConfig} />, document.getElementById('app'));

//render((
//    <Router history={hashHistory}>
//        <Route path='/' component={App}>
//            <IndexRoute component={Dashboard} />
//            <Route path='about' component={About} />
//            <Route path='inbox' component={Inbox}>
//                <Route path='/messages/:id' component={Message} />
//                <Redirect from="messages/:id" to="/messages/:id" />
//            </Route>
//        </Route>
//    </Router>
//), document.getElementById('app'));