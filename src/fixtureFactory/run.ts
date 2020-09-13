import { Account, User } from './fixtures'
import Factory from './fixtures/factory'


const factory = new Factory();

factory.mockCreate(Account).then(res => console.log(res))
factory.mockCreate(User).then(res => console.log(res))