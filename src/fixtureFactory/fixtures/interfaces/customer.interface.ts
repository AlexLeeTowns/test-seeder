import { Account, User } from '../'

export interface CustomerInt {
    body: CustomerBody;
    dependencies: CustomerDependencies
}

interface CustomerBody {
    id: string;
    firstName: string;
    lastName: string;
    account: Account;
}

interface CustomerDependencies {
    account: Account;
    user: User;
}