/**
 * @flow
 */

import React, { Component } from 'react';
import RootStack from './navigation/navigation';
import { Provider } from 'mobx-react';
import RootStore from './Stores/';

const Root = (
    <Provider rootStore={new RootStore()}>
        <RootStack />
    </Provider>
);

class App extends Component {
    render() {
        return Root;
    }
}

export default App;
