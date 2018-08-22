import React from 'react';
import { Text, Footer, FooterTab, Button, Icon } from 'native-base';

const CustomFooter = props => {
    console.log('hello');
    console.log(props.navigation.state);
    return (
        <Footer>
            <FooterTab>
                {props.navigation.state.routes.map((route, index) => (
                    <Button
                        active={props.navigation.state.index === index}
                        key={route.key}
                        onPress={() => props.navigation.navigate(route.routeName)}
                    >
                        <Icon active={props.navigation.state.index === index} name="apps" />
                        <Text>{route.routeName}</Text>
                    </Button>
                ))}
            </FooterTab>
        </Footer>
    );
};

export default CustomFooter;
