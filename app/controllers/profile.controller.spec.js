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

});
