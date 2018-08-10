import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import navigationScreen from '../hoc/navigationScreen';

class DetailsScreen extends Component {
    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button block onPress={() => this.props.navigation.push('DetailsScreen')}>
                    <Text>Go to Details</Text>
                </Button>
                <Button block onPress={() => this.props.navigation.navigate('HomeScreen')}>
                    <Text>Go to Home</Text>
                </Button>
                <Button block onPress={() => this.props.navigation.goBack()}>
                    <Text>Go back</Text>
                </Button>
            </Container>
        );
    }
}

export default navigationScreen({ title: 'Details' })(DetailsScreen);
