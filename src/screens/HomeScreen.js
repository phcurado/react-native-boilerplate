import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import navigationScreen from '../hoc/navigationScreen';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('DetailsScreen')}
                />
            </View>
        );
    }
}

export default navigationScreen({ title: 'Home' })(HomeScreen);
