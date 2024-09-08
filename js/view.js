export class View {
    constructor(model, controller) {
        this.model = model;
        this.controller = controller;
        this.model.addListener(this);
        this.bindEvents();
        this.render();
    }

    update() {
        this.render();
    }

    render() {
        const keyField = document.getElementById('keyField').value;
        const value = this.model.getData(keyField);
        const dataDisplay = document.getElementById('dataDisplay');
        const dataList = document.getElementById('dataList');

        // Update single key-value display
        dataDisplay.innerText = value ? `Key: ${keyField}, Value: ${value}` : 'No data available';

        // Update list of all key-value pairs
        dataList.innerHTML = '';
        const allData = this.model.getAllData();
        for (const [key, value] of Object.entries(allData)) {
            console.log(`Key: ${key}, Value: ${value}`);
            const listItem = document.createElement('li');
            listItem.textContent = `Key: ${key}, Value: ${value}`;
            dataList.appendChild(listItem);
        }
    }
    bindEvents() {
        // Bind user input events to controller methods
        document.getElementById('updateButton').addEventListener('click', () => {
            const key = document.getElementById('keyField').value;
            const value = document.getElementById('valueField').value;
            this.controller.updateData(key, value);
        });
    }
}