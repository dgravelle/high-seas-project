(function () {

  angular
    .module('app')
    .factory('UsersFactory', UsersFactory)

    function UsersFactory() {
      var Users = {};

      var userList = [
        { id: 1, username: 'abby', email: 'abby@test.com', password: 'password' },
        { id: 2, username: 'bill', email: 'bill@test.com', password: 'password' },
        { id: 3, username: 'cate', email: 'cate@test.com', password: 'password' }
      ];

      Users.getUser = (userId) => {
        // api call would normally go here
        return userList.find((user) => {
          return user.id === userId;
        });
      }

      Users.getUserByEmail = (email) => {
        return userList.find((user) => {
          return user.email === email;
        });
      }

      Users.updateEmail = (userId, newEmail) => {
        var user = userList.find((user) => {
          return user.id === userId;
        });

        user.email = newEmail;

        return user;
      }

      Users.getUserByUsername = (username) => {
        return userList.find((user) => {
          return user.username === username;
        });
      }

      return Users;
    }

})();
