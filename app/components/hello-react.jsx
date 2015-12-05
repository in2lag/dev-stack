import '../scss/hello-react';
import React from 'react';

export default class extends React.Component {
    render() {
        return <h1 className="hello-react">Hello {this.props.name}</h1>;
    }
};
