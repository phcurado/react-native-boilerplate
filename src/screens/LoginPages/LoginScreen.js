import React, { Component } from 'react';
import { Button, Container, Header, Content, Form, Item, Input, Label, Text } from 'native-base';
import navigationScreen from '../../hoc/navigationScreen';
import RootStore from '../../Stores/';
import { inject, observer } from 'mobx-react';

@inject('rootStore')
@observer
class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Content>
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
                            block
                            onPress={() => this.props.navigation.navigate('BottomNavigatorStack')}
                        >
                            <Text>Click Me!</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default LoginScreen;
