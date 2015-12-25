import React from 'react';

import { Link } from 'react-router'

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/hello-react/react">Hello</Link></li>
                    <li><Link to="/">Welcome</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
};
