import { AsyncStorage } from 'react-native';
import { action, computed, observable } from 'mobx';
class AuthStore {
    @observable
    token = '';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    saveToken = async token => {
        AsyncStorage.setItem('token', token);
    };

    @action
    getToken = async () => {
        return AsyncStorage.getItem('token');
    };
}
export default AuthStore;
