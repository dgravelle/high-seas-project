(function () {

  angular
    .module('app')
    .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', 'UsersFactory', 'user'];

    function ProfileController($scope, UsersFactory, user) {
      var profileStore = user;

      $scope.successMsg = [];
      $scope.emailTaken = false;
      $scope.userNameTaken = false;
      $scope.profile = {};
      $scope.focus = false;

      $scope.setFocusEl = function(e) {
        $scope.focus = true;
      }

      $scope.setProfile = () => {
        $scope.profile = {
          email: profileStore.email,
          username: profileStore.username,
          password: profileStore.password,
          passwordConfirm: profileStore.password
        }
      }

      $scope.updateEmail = (userId, email) => {
        UsersFactory.getUserByEmail(email).then(data => {
          if (!data) {
            UsersFactory.updateEmail(userId, email).then(data => {
              var user = data.data

              $scope.emailTaken = false;
              $scope.successMsg.push({
                msg: `Success! Your email has been updated to ${user.email}`
              });
              profileStore.email = user.email;

              return $scope.successMsg;
            });
          }
          else {
            $scope.emailTaken = true;
            $scope.emailTaken = 'Sorry, this email is already in use';

            return $scope.emailTaken;
          }
        });
      }

      $scope.updateUsername = (userId, username) => {
        UsersFactory.getUserByUsername(username).then(data => {
          if (!data) {
            UsersFactory.updateUsername(userId, username).then(data => {
              var user = data.data;
              $scope.successMsg.push({
                msg: `Success! Your username has been updated to ${user.username}`
              });
              $scope.userNameTaken = false;
              profileStore.username = user.username;

              return $scope.successMsg;
            });
          }
          else {
            $scope.userNameTaken = `Sorry, this ${username} is already in use`;

            return $scope.userNameTaken;
          }
        });
      }

      $scope.validate = (valid, form) => {
        if (!valid) {
          return
        }
        $scope.emailTaken = false;
        $scope.userNameTaken = false;
        $scope.successMsg = [];

        if (form.email !== profileStore.email) {
          $scope.updateEmail(user.id, form.email);
        }

        if (form.username !== profileStore.username) {
          $scope.updateUsername(user.id, form.username);
        }
      }

      $scope.setProfile();
    }
  })();
