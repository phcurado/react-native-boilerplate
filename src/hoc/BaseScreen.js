import React, { Component } from 'react';
import { Button, Container, Header, Content, Form, Item, Input, Label, Text } from 'native-base';
import CustomHeader from '../Components/navigation/CustomHeader';

const BaseScreen = props => WrappedScreen => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <Content style={{ marginLeft: 20, marginRight: 20 }}>
                    <WrappedScreen {...this.props} />
                </Content>
            );
        }
    };
};

export default BaseScreen;
