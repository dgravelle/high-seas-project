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
    expect(scope).toBeDefined();
  }));

  // describe('user profile', () => {


    // it('should load user profile on home route', () => {
    //   expect(profile).toBeDefined();
    //   expect(profile.controller).toEqual('ProfileController');
    //   expect(profile.resolve.user).toBeDefined();
    // });
    //
    // it('should load Abbys profile', ()=> {
    //   var profile = route.routes['/'];
    //   var profileResolveBlock = profile.resolve.user;
    //   var user = injector.invoke(profileResolveBlock);
    //
    //   expect(user).toEqual({ id: 1, username: 'abby', email: 'abby@test.com', password: 'password' })
    // })


  });
