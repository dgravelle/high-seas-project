(function () {

  angular
    .module('api.users', [])
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
        console.log('get user');
        return userList.find((user) => {
          return user.id === userId;
        });
      }

      return Users;
    }

})();
