import React, { Component } from 'react';
import { Button, Container, Header, Content, Form, Item, Input, Label, Text } from 'native-base';
import navigationScreen from '../../hoc/navigationScreen';
import RootStore from '../../Stores/';
import { inject, observer } from 'mobx-react';

@inject('rootStore')
@observer
class LoginScreen extends Component {
    render() {
        return (
            <Form>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                </Item>
                <Button
                    style={{ marginTop: 20 }}
                    block
                    onPress={() => this.props.navigation.navigate('BottomNavigatorStack')}
                >
                    <Text>Click Me!</Text>
                </Button>
            </Form>
        );
    }
}

export default navigationScreen()(LoginScreen);
