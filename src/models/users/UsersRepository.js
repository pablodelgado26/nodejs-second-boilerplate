import User from './User.js';

class UsersRepository {
    constructor() {
        this.users = [];
    }

    getALLUsers() {
        return this.users;
    }
}

export default UsersRepository;