import '../scss/hello-react';
import React from 'react';
import { Router, Route, Link } from 'react-router'

export default class extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="hello-react">Welcome to Team Hydra</h1>
                </header>
                <aside>
                    <ul>
                        <li><Link to="/">Welcome</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/team-members">Team members</Link></li>
                    </ul>
                </aside>
                <article>
                    {this.props.children}
                </article>
            </div>
        )
    }
};
