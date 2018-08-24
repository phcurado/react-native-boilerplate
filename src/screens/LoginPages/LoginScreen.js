import React, { Component } from 'react';
import { Button, Container, Header, Content, Form, Item, Input, Label, Text } from 'native-base';
import BaseScreen from '../../hoc/BaseScreen';
import RootStore from '../../Stores/';
import { inject, observer } from 'mobx-react';

@inject('rootStore')
@observer
class LoginScreen extends Component {
    state = {
        username: '',
        password: ''
    };
    onLogin = () => {
        this.props.rootStore.authStore.username = this.state.username;
        this.props.rootStore.authStore.password = this.state.password;
        this.props.rootStore.authStore.login();
        this.props.navigation.navigate('BottomNavigatorStack');
    };

    updateInput = (value, input) => {
        this.setState({ [input]: value });
    };

    render() {
        return (
            <Form>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input
                        onChangeText={value => this.updateInput(value, 'username')}
                        value={this.state.username}
                    />
                </Item>
                <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input
                        onChangeText={value => this.updateInput(value, 'password')}
                        value={this.state.password}
                    />
                </Item>
                <Button style={{ marginTop: 20 }} block onPress={this.onLogin}>
                    <Text>Login</Text>
                </Button>
            </Form>
        );
    }
}

export default BaseScreen()(LoginScreen);
