import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import navigationScreen from '../hoc/navigationScreen';
import CounterStore from '../Stores/CounterStore';
import { observer } from 'mobx-react';
@observer
class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button onPress={() => this.props.navigation.navigate('DetailsScreen')}>
                    <Text>Go to Details</Text>
                    <Text>{CounterStore.counter}</Text>
                </Button>
                <Button primary block onPress={() => CounterStore.increment()}>
                    <Text>Increment</Text>
                </Button>
                <Button primary block onPress={() => CounterStore.decrement()}>
                    <Text>Decrement</Text>
                </Button>
            </Container>
        );
    }
}

export default navigationScreen({ title: 'Home' })(HomeScreen);
