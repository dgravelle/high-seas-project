(function () {

  angular
    .module('app', [
      'ngRoute'
    ])
    .config(($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'views/profile-form.html',
          resolve: {
            user: (UsersFactory) => {
              // hard coded to make sure we retrieve our friend Abby
              // would other wise grab Id from url
              return Users.getUser(1);
            }
          }
        })
    });
})()
