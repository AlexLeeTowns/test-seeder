export default class Module {
    userParams: object;
    constructor(params: object = {}) { this.userParams = params }

    get body() { return { } }
}