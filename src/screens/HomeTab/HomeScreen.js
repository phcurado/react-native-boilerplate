import React, { Component } from 'react';
import { Button, Content, Text } from 'native-base';
import BaseScreen from '../../hoc/BaseScreen';
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
            <Content
                contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>Double counter</Text>
                <Text>{this.props.rootStore.counterStore.doubleCounter}</Text>
                <Button
                    style={{ marginBottom: 20 }}
                    block
                    onPress={() => this.props.navigation.navigate('Details')}
                >
                    <Text>Go to Details</Text>
                    <Text>{this.props.rootStore.counterStore.counter}</Text>
                </Button>
                <Button
                    style={{ marginBottom: 20 }}
                    primary
                    block
                    onPress={() => this.props.rootStore.counterStore.increment()}
                >
                    <Text>Increment</Text>
                </Button>
                <Button primary block onPress={() => this.props.rootStore.counterStore.decrement()}>
                    <Text>Decrement</Text>
                </Button>
            </Content>
        );
    }
}

export default BaseScreen()(HomeScreen);
