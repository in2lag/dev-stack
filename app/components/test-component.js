import './../scss/test-component.scss';

export default class {
    constructor(message) {
        this.message = message || 'component works';
    }

    print() {
        console.log(this.message);
    }
}