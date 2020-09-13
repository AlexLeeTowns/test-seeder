import { random, name } from 'faker'
import Model from './Model'

export default class User extends Model {
    body = {
        ...{
            firstName: name.firstName(),
            lastName: name.lastName(),
            id: random.uuid()
        },
        ...this.userParams
    }
}