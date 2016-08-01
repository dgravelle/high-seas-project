describe('Users Factory', () => {
  var UsersFactory,
      injector,
      http,
      userList = [
    { id: 1, username: 'abby', email: 'abby@test.com', password: 'password' },
    { id: 2, username: 'bill', email: 'bill@test.com', password: 'password' },
    { id: 3, username: 'cate', email: 'cate@test.com', password: 'password' }
  ];

  beforeEach(angular.mock.module('app'));

  beforeEach(inject((_UsersFactory_, _$injector_) => {
    UsersFactory = _UsersFactory_;
    injector = _$injector_;
    http = injector.get('$httpBackend');
  }));

  it('should be defined', () => {
    expect(UsersFactory).toBeDefined();
  });

  describe('.getUser()', () => {
    it('should return users credential for provided user Id', () => {
      var user;
      UsersFactory.getUser(1).then((data) => {
          user = data;
          return user;
      });

      expect(user).toEqual({ id: 1, username: 'abby', email: 'abby@test.com', password: 'password' });

    });
  });

  describe('.getUserByEmail()', () => {
    it('should return users credential when provided an existing email', () => {
      var user = UsersFactory.getUserByEmail('abby@test.com');

      expect(user).toEqual({ id: 1, username: 'abby', email: 'abby@test.com', password: 'password' });
    });

    it('should return undefined when provided email does not exist', () => {
      var user = UsersFactory.getUserByEmail('hello@world.com');

      expect(user).toEqual(undefined);
    });
  });

  describe('.updateEmail()', () => {
    it('should update a provided users email address and return their credentials', () => {
      var user = UsersFactory.updateEmail(1, 'new@email.com');

      expect(user).toEqual({ id: 1, username: 'abby', email: 'new@email.com', password: 'password' });
    });
  });

  describe('.getUserByUsername()', () => {
    it('should return users credential when provided an existing username', () => {
      var user = UsersFactory.getUserByUsername('abby');

      expect(user).toEqual({ id: 1, username: 'abby', email: 'abby@test.com', password: 'password' });
    });

    it('should return undefined when provided username does not exist', () => {
      var user = UsersFactory.getUserByUsername('abc');

      expect(user).toEqual(undefined);
    });
  });

});
