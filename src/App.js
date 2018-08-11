/**
 * @flow
 */

import React, { Component } from 'react';
import RootStack from './navigation/navigation';
import { Provider } from 'mobx-react';
import CounterStore from './Stores/CounterStore';

const Root = (
    <Provider CounterStore={CounterStore}>
        <RootStack />
    </Provider>
);

class App extends Component {
    render() {
        return Root;
    }
}

export default App;
