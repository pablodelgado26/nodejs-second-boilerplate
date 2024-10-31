import User from './User.js';

class UsersRepository {
    constructor() {
        this.users = [];
    }

    getALLUsers() {
        return this.users;
    }

    addUser(name, email, passoword) {
        const newUser = new User(name, email, passoword);
        this.users.push(newUser);
        return newUser;
    }

    getUserById(id) {
        const user = this.users.find((U) => U.id == id);

        return user;
    }
}

export default UsersRepository;