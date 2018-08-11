import React from 'react';
import { Header, Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => <Text style={styles.title}>{title}</Text>;

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
