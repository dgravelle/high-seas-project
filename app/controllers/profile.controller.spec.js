describe('ProfileController', () => {
  beforeEach(angular.mock.module('app'));

  var ProfileController, user;

  beforeEach(inject((_$controller_) => {
    ProfileController = _$controller_;
  }));

  it('should be defined', () => {
    expect(ProfileController).toBeDefined();
  });

});
