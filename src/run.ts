import { Account, Customer, User } from './fixtureFactory/fixtures'
import Factory from './fixtureFactory/fixtures/factory'


const factory = new Factory();

// factory.mockCreate(Account).then(res => console.log(res))
// factory.mockCreate(User).then(res => console.log(res))
const fml: Customer = factory.mockCreate(Customer)

console.log(fml.body)