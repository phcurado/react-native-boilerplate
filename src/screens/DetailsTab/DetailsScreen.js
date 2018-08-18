import React, { Component } from 'react';
import { Button, Container, Content, Text } from 'native-base';
import navigationScreen from '../../hoc/navigationScreen';

class DetailsScreen extends Component {
    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Content
                    contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text>Details Screen</Text>
                    <Button block onPress={() => this.props.navigation.push('Details')}>
                        <Text>Go to Details</Text>
                    </Button>
                    <Button block onPress={() => this.props.navigation.navigate('Home')}>
                        <Text>Go to Home</Text>
                    </Button>
                    <Button block onPress={() => this.props.navigation.goBack()}>
                        <Text>Go back</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default navigationScreen({ title: 'Details' })(DetailsScreen);
