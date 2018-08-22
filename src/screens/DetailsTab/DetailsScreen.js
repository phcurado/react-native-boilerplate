import React, { Component } from 'react';
import { Button, Content, Text } from 'native-base';
import navigationScreen from '../../hoc/navigationScreen';

class DetailsScreen extends Component {
    render() {
        return (
            <Content>
                <Text>Details Screen</Text>
                <Button
                    style={{ marginBottom: 20 }}
                    block
                    onPress={() => this.props.navigation.push('Details')}
                >
                    <Text>Go to Details</Text>
                </Button>
                <Button
                    style={{ marginBottom: 20 }}
                    block
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text>Go to Home</Text>
                </Button>
                <Button block onPress={() => this.props.navigation.goBack()}>
                    <Text>Go back</Text>
                </Button>
            </Content>
        );
    }
}

export default navigationScreen()(DetailsScreen);
