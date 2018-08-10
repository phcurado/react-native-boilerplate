import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import navigationScreen from '../hoc/navigationScreen';

class DetailsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.push('DetailsScreen')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

export default navigationScreen({ title: 'Details' })(DetailsScreen);
