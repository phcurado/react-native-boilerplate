import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import navigationScreen from '../hoc/navigationScreen';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button onPress={() => this.props.navigation.navigate('DetailsScreen')}>
                    <Text>Button</Text>
                </Button>
            </Container>
        );
    }
}

export default navigationScreen({ title: 'Home' })(HomeScreen);
