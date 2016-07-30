(function () {

  angular
    .module('app')
    .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', 'UsersFactory', 'user'];

    function ProfileController($scope, UsersFactory, user) {

      $scope.profile = {
        email: user.email,
        username: user.username,
        password: user.password,
        passwordConfirm: ''
      };

      console.log($scope.profile);

    }

})()
