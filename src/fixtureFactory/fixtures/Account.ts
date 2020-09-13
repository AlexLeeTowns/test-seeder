import { random, company } from 'faker'
import Model from './Model'

export default class Account extends Model {
    body = {
        ...{
            id: random.uuid(),
            name: company.companyName()
        },
        ...this.userParams
    }
}
