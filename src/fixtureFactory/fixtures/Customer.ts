import { random, name } from 'faker'
import { Account, User } from '.'
import Model from './Model'
import { CustomerInt } from './interfaces/customer.interface'

export default class Customer extends Model implements CustomerInt {
    dependencies = {
        account: new Account(),
        user: new User()
    }

    body = {
        ...{
            id: random.uuid(),
            firstName: name.firstName(),
            lastName: name.lastName(),
            account: this.dependencies.account
        },
        ...this.userParams
    }

}