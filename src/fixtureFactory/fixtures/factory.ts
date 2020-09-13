import axios from 'axios'
import { Model } from ".";

export default class FixtureFactory {
    apiUrl: string;
    accessToken: string;

    constructor(apiUrl = 'http://127.0.0.1', accessToken = 'token') { this.apiUrl = apiUrl, this.accessToken = accessToken}
    async create(model: any, params: object = {}) {
        const result = await axios.post(
            this.apiUrl,
            model.body,
            { headers: {Authorization: this.accessToken} }
        )
        return new Model({}, result.data)
    }

    async mockCreate(model: any, params: object = {}) {
        return new model(params)
    }
}