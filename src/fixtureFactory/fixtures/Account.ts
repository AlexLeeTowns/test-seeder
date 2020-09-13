import { random, company } from 'faker'
import Model from './Model'
import { AccountInt } from './interfaces/account.interface'

export default class Account extends Model implements AccountInt {
    body = {
        ...{
            id: random.uuid(),
            name: company.companyName()
        },
        ...this.userParams
    }
}
