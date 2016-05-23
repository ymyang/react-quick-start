'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let createItem = (item) => {
            return <li key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: ''
        };
    }
    onChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{ text: this.state.text, id: Date.now() }]);
        var nextText = '';
        this.setState({
            items: nextItems,
            text: nextText
        });
    }
    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.onChange.bind(this)} value={this.state.text}/>
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
}

render(<TodoApp/>, document.getElementById('todo'));