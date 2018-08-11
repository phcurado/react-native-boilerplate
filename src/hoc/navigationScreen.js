import React, { Component } from 'react';
import CustomHeader from '../navigation/CustomHeader';

const navigationScreen = ({ title }) => WrappedScreen => {
    return class extends Component {
        static navigationOptions = {
            title: title,
            headerTitle: <CustomHeader title={title} />
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
