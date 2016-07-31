(function () {

  angular
    .module('app')
    .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', 'UsersFactory', 'user'];

    function ProfileController($scope, UsersFactory, user) {
      var profileStore = user;

      $scope.successMsg;
      $scope.emailTaken;
      $scope.userNameTaken;

      ($scope.resetProfile = () => {
        $scope.profile = {
          email: profileStore.email,
          username: profileStore.username,
          password: profileStore.password,
          passwordConfirm: profileStore.password
        }
        $scope.emailTaken = false;
        $scope.userNameTaken = false;
      })()



      $scope.validate = (valid, form) => {
        if (!valid) {
          return
        }

        if (form.email !== profileStore.email) {
          if (!UsersFactory.getUserByEmail(form.email)) {
            UsersFactory.updateEmail(user.id, form.email);
            $scope.emailTaken = false;
            return $scope.successMsg = `Success! Your email has been updated to ${user.email}`;
          }
          else {
            return $scope.emailTaken = 'Sorry, this email is already in use'
          }
        }
      }

      $scope.makeError = () => {
        $scope.profileForm.email.$invalid = !$scope.profileForm.email.$invalid;
        console.log($scope.profileForm);
      }

    }

})()
