import AuthStore from './AuthStore';
import CounterStore from './CounterStore';

class RootStore {
    constructor() {
        this.authStore = new AuthStore(this);
        this.counterStore = new CounterStore(this);
    }
}

export default RootStore;
