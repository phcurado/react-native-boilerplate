import { action, computed, observable } from 'mobx';
class CounterStore {
    @observable
    counter = 0;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    increment = () => {
        this.counter++;
    };

    @action
    decrement = () => {
        this.counter--;
    };

    @computed
    get doubleCounter() {
        return this.counter * 2;
    }
}
export default CounterStore;
