export class Model {
    constructor() {
        this.data = {};
        this.listeners = [];
    }

    setData(key, value) {
        this.data[key] = value;
        this.notify();
    }

    getData(key) {
        return this.data[key];
    }

    getAllData() {
        return this.data;
    }

    notify() {
        this.listeners.forEach(listener => listener.update());
    }

    addListener(listener) {
        this.listeners.push(listener);
    }
}