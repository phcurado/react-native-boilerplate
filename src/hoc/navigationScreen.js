import React, { Component } from 'react';

const navigationScreen = ({ title }) => WrappedScreen => {
    return class extends Component {
        static navigationOptions = {
            title: title
        };

        constructor(props) {
            super(props);
        }

        render() {
            return <WrappedScreen {...this.props} />;
        }
    };
};

export default navigationScreen;
