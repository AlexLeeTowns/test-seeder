import { random, company } from 'faker'
import Model from './Model'

export default new class Account extends Model {
    get body() {
        return {
            ...{
                id: random.uuid(),
                name: company.companyName()
            },
            ...this.userParams
        }
    }
}