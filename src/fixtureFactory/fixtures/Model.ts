export default class Module {
    userParams: object;
    body;
    constructor(params: object = {}, body = { }) { this.userParams = params, this.body = body }
}