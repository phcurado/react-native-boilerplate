import React from 'react';

import { Header, Container, Text } from 'native-base';

const CustomHeader = ({ title }) => (
    <Header style={styles.header}>
        <Container>
            <Text style={styles.title}>{title}</Text>
        </Container>
    </Header>
);

export default CustomHeader;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignSelf: 'stretch'
    },
    title: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold'
    }
});
