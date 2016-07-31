describe('Users Factory', () => {
  var UsersFactory;
  var userList = [
    { id: 1, username: 'abby', email: 'abby@test.com', password: 'password' },
    { id: 2, username: 'bill', email: 'bill@test.com', password: 'password' },
    { id: 3, username: 'cate', email: 'cate@test.com', password: 'password' }
  ];

  beforeEach(angular.mock.module('app'));

  beforeEach(inject((_UsersFactory_) => {
    UsersFactory = _UsersFactory_;
  }));

  it('should be defined', () => {
    expect(UsersFactory).toBeDefined();
  });

  describe('.getUser()', () => {
    it('should return users credential for provided user Id', () => {
      expect(UsersFactory.getUser(1)).toEqual({ id: 1, username: 'abby', email: 'abby@test.com', password: 'password' })
    });
  });

  describe('.getUserByEmail()', () => {
    it('should return users credential when provided an existing email', () => {
      expect(UsersFactory.getUserByEmail('abby@test.com')).toEqual({ id: 1, username: 'abby', email: 'abby@test.com', password: 'password' });
    });

    it('should return undefined when provided email does not exist', () => {
      expect(UsersFactory.getUserByEmail('hello@world.com')).toEqual(undefined);
    });
  });

  describe('.updateEmail()', () => {
    it('should update a provided users email address and return their credentials', () => {
      expect(UsersFactory.updateEmail(0, 'new@email.com')).toEqual({ id: 1, username: 'abby', email: 'new@email.com', password: 'password' });
    });
  });

  describe('.getUserByUsername()', () => {
    it('should return users credential when provided an existing username', () => {
      expect(UsersFactory.getUserByUsername('abby')).toEqual({ id: 1, username: 'abby', email: 'abby@test.com', password: 'password' });
    });

    it('should return undefined when provided username does not exist', () => {
      expect(UsersFactory.getUserByUsername('abc')).toEqual(undefined);
    });
  });

});
