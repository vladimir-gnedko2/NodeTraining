const UsersService = require("../services/users.services");

function User (name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
};

let user1 = new User ('Pasha', 25, 1);
let user2= new User ('Vova', 29, 2);
let user3 = new User ('Gena', 28, 3);
let user4 = new User ('Jeka', 33, 4);

let users = [user1, user2, user3, user4];





class UsersControllers{
   async getUsers() { 
       let users = await UsersService.getUsers()
        return users
//  const userId = users.find((item) => item.id == req.params.id);
    }
    getUsersId(id) {
        return users.find((item) => item.id == id)
    }
}

module.exports = new UsersControllers();

// console.log(users);