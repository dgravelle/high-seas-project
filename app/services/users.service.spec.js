describe('Users Factory', () => {
  var UsersFactory,
      httpBackend,
      userList = [
        { id: 1,
          username: 'abby',
          email: 'abby@test.com',
          password: 'password'
        },
        { id: 2,
          username: 'bill',
          email: 'bill@test.com',
          password: 'password'
        },
        { id: 3,
          username: 'cate',
          email: 'cate@test.com',
          password: 'password'
        }
      ];

  beforeEach(angular.mock.module('app'));

  beforeEach(inject((_UsersFactory_, $httpBackend) => {
    UsersFactory = _UsersFactory_;
    httpBackend = $httpBackend;
  }));

  it('should be defined', () => {
    expect(UsersFactory).toBeDefined();
  });

  describe('.getUser()', () => {
    it('should return users credential for provided user Id', () => {

      httpBackend
        .whenGET('/api/users/1')
        .respond({
          id: 1,
          username: 'abby',
          email: 'abby@test.com',
          password: 'password'
        });

      UsersFactory.getUser(1).then((data) => {
        expect(data).toEqual({
          id: 1,
          username: 'abby',
          email: 'abby@test.com',
          password: 'password'
        });
      });

      httpBackend.flush();

    });
  });

  describe('.getUserByEmail()', () => {
    it('should return true if provided email is in system', () => {

      httpBackend
        .whenGET('/api/users/email_exists?email=abby@test.com')
        .respond(true);

      UsersFactory.getUserByEmail('abby@test.com').then(data => {
        expect(data).toEqual(true);
      });

      httpBackend.flush();

    });

    it('should return false when provided an email that does not already exist', () => {

      httpBackend
        .whenGET('/api/users/email_exists?email=newemail@test.com')
        .respond(false);

      UsersFactory.getUserByEmail('newemail@test.com').then(data => {
        expect(data).toEqual(false);
      });

      httpBackend.flush();
    });
  });

  describe('.updateEmail()', () => {
    it('should update a provided users email address and return their credentials', () => {

      httpBackend
        .when('PUT', 'api/users/1/', { email: 'new@test.com' })
        .respond({
          id: 1,
          username: 'abby',
          email: 'new@email.com',
          password: 'password'
        })

      UsersFactory.updateEmail(1, 'new@email.com').then(data => {
        expect(data).toEqual({
          id: 1,
          username: 'abby',
          email: 'new@email.com',
          password: 'password'
        });
      });
    });
  });

  describe('.getUserByUsername()', () => {
    it('should return users credential when provided an existing username', () => {

      UsersFactory.getUserByUsername('abby').then(user => {
        expect(user).toEqual({
          id: 1,
          username: 'abby',
          email: 'abby@test.com',
          password: 'password'
        });
      });
    });

    it('should return undefined when provided username does not exist', () => {
      var user;

      UsersFactory.getUserByUsername('abc').then(data => {
        user = data;

        expect(user).toEqual(undefined);
      });
    });
  });

});
