import { Account } from './fixtures'
import Factory from './factory'


const factory = new Factory();

factory.mockCreate(Account).then(res => console.log(res))
factory.mockCreate(Account).then(res => console.log(res))
