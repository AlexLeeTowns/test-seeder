import { ObjectBindingPattern } from "typescript";

export default class Module {
    userParams: object;
    body: object;
    constructor(
        params: object = {},
        body = { },
    ) {
        this.userParams = params
        this.body = body
    }
}