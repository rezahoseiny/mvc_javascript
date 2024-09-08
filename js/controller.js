export class Controller {
    constructor(model) {
        this.model = model;
    }

    updateData(key, value) {
        this.model.setData(key, value);
    }
}