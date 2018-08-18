import React, { Component } from 'react';
import { Button, Container, Content, Text } from 'native-base';
import navigationScreen from '../../hoc/navigationScreen';
import RootStore from '../../Stores/';
import { inject, observer } from 'mobx-react';

@inject('rootStore')
@observer
class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
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
                    <Text>Double counter</Text>
                    <Text>{this.props.rootStore.counterStore.doubleCounter}</Text>
                    <Button onPress={() => this.props.navigation.navigate('Details')}>
                        <Text>Go to Details</Text>
                        <Text>{this.props.rootStore.counterStore.counter}</Text>
                    </Button>
                    <Button
                        primary
                        block
                        onPress={() => this.props.rootStore.counterStore.increment()}
                    >
                        <Text>Increment</Text>
                    </Button>
                    <Button
                        primary
                        block
                        onPress={() => this.props.rootStore.counterStore.decrement()}
                    >
                        <Text>Decrement</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default navigationScreen({ title: 'Home' })(HomeScreen);
