import React from 'react';
import {
    Body,
    Button,
    Container,
    Header as NativeHeader,
    Icon,
    Left,
    Text,
    Title,
    Right
} from 'native-base';
import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';

const CustomHeader = props => {
    return (
        <NativeHeader>
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
        </NativeHeader>
    );
};
export default CustomHeader;
