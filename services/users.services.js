

class UsersService {
    getUsers() {
        return new Promise((res, req) => {
            res( {name: 'jeka', age: 33})
        })
    }
}

module.exports = new UsersService();