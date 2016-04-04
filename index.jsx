/**
 * Created by yang on 2016/4/4.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ExampleApplication = React.createClass({
    render: function() {
        var elapsed = Math.round(this.props.elapsed  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message = 'React has been successfully running for ' + seconds + ' seconds.';

        return <p>{message}</p>;
    }
});

var start = new Date().getTime();

setInterval(function() {
    ReactDOM.render(
        <ExampleApplication elapsed={new Date().getTime() - start} />,
        document.getElementById('container')
    );
}, 50);