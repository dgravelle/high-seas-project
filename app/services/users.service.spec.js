describe('Users Factory', () => {
  var UsersFactory;
  var userList = [
    { id: 1, username: 'abby', email: 'abby@test.com', password: 'password' },
    { id: 2, username: 'bill', email: 'bill@test.com', password: 'password' },
    { id: 3, username: 'cate', email: 'cate@test.com', password: 'password' }
  ];

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject((_UsersFactory_) => {
    UsersFactory = _UsersFactory_;
  }));

  it('should be defined', () => {
    expect(UsersFactory).toBeDefined();
  });
});
