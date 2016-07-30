(function () {

  angular
    .module('app', [
      'ngRoute'
    ])
    .config(($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'views/form.html',
          resolve: {
            user: (UsersFactory) => {
              // hard coded to make sure we retrieve friend Abby
              return Users.getUser(1);
            }
          }
        })
    });
})()
