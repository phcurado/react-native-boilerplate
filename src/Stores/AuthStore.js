import { AsyncStorage } from 'react-native';
import { action, computed, observable } from 'mobx';
import { UserService } from '../services/';
class AuthStore {
    @observable
    token = '';

    @observable
    username = '';

    @observable
    password = '';

    @observable
    user = {};

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    login = async () => {
        await this.clearUser();
        await UserService.login(this.username, this.password).then(
            response => {
                this.token = response.headers['x-auth'];
            },
            error => {
                console.log(error);
            }
        );
    };

    @action
    getUser = async () => {
        await UserService.getUser(this.token).then(
            response => {
                this.user = response.data;
                this.saveUser(this.user);
            },
            error => {
                console.log(error);
            }
        );
    };

    @action
    saveUser = async user => {
        AsyncStorage.setItem('user', user);
    };
    @action
    async clearUser() {
        AsyncStorage.removeItem('user');
    }
}
export default AuthStore;
