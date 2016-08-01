(function () {

  angular
    .module('app')
    .factory('UsersFactory', UsersFactory)

    UsersFactory.$inject = ['$http']

    function UsersFactory($http) {
      var Users = {};

      var userList = [
        { id: 1, username: 'abby', email: 'abby@test.com', password: 'password' },
        { id: 2, username: 'bill', email: 'bill@test.com', password: 'password' },
        { id: 3, username: 'cate', email: 'cate@test.com', password: 'password' }
      ];

      Users.getUser = (userId) => {
        return $http.get('/api/users/' + userId).then(user => {
          console.log('from factory', user.data);
          return user.data;
        });
      }

      Users.getUserByEmail = (email) => {
        return $http.get('/api/users/email_exists?email=' + email).then(user => {
          console.log(user);
          return user.data
        })
      }

      Users.updateEmail = (userId, newEmail) => {
        return $http.put('/api/users/' + userId, { email: newEmail }).then(data => {
          console.log(data);
          return data;
        });
      }

      Users.getUserByUsername = (username) => {
        return userList.find(user => {
          return user.username === username;
        });
      }

      return Users;
    }

})();
