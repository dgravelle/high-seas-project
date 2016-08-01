describe('ProfileController', () => {
  beforeEach(angular.mock.module('app'));

  var ProfileController,
      scope,
      route,
      injector,
      profileResolveBlock,
      user;

  beforeEach(inject(($route, $injector) => {
    route = $route;
    injector = $injector;
    profile = route.routes['/'];
    profileResolveBlock = profile.resolve.user;
    user = injector.invoke(profileResolveBlock);
  }));

  it('should be defined', inject((_$controller_) => {
    scope = {}

    ProfileController = _$controller_('ProfileController', {
      $scope: scope, user: user
    });

    expect(ProfileController).toBeDefined();
  }));

  describe('form validation', () => {
    it('should return "Success! Your email has been updated to new@email.com" when form is submitted with a unique email address', () => {
      scope.validate(true, { email: 'new@email.com' });

      console.log(scope.successMsg);

      expect(scope.successMsg).toEqual('Success! Your email has been updated to new@email.com');
    });

    it('should return "Sorry, this email is already in use" if given an email address in use', () => {
      scope.validate(true, { email: 'abby@email.com' });

      expect(scope.successMsg).toEqual('Sorry, this email is already in use');
    })
  });

});
