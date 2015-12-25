import '../scss/hello-react';
import React from 'react';

export default class extends React.Component {
    render() {
        const name = this.props.name || this.props.params.name;

        return <h1 className="hello-react">Hello {name}</h1>;
    }
};
