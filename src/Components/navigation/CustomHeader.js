import React from 'react';
import { Body, Button, Container, Header, Icon, Left, Text, Title, Right } from 'native-base';
import { StyleSheet } from 'react-native';

const CustomHeader = props => {
    return (
        <Header>
            {props.navigation.state.index > 0 ? (
                <Left>
                    <Button transparent onPress={() => props.navigation.pop()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
            ) : null}

            <Body>
                <Title style={{ marginLeft: props.navigation.state.index > 0 ? 0 : 20 }}>
                    {props.navigationOptions.title}
                </Title>
            </Body>
            <Right />
        </Header>
    );
};
export default CustomHeader;
