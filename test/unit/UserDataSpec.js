'use strict';

describe('userData', function() {
  var mockUserResource;

  beforeEach(module('eventsApp'));

  beforeEach(function(){
    mockUserResource = sinon.stub({get: function(){}, save: function(){}});
    module(function($provide){
      $provide.value('userResource', mockUserResource);
    })
  })
  describe('getUser', function(){
    it('should call getResource.get with the username', inject(function(userData) {
        userData.getUser('bob');
        expect(mockUserResource.get.args[0][0]).toEqual({userName:'bob'});
    }))

    it('should return whatever userResource returns', inject(function(userData){
        mockUserResource.get.returns('angular rocks');
        var result = userData.getUser('bob');

        expect(result).toBe('angular rocks');
    }))
  })

  describe('save', function(){
    it('should save a user', inject(function(userData) {
        userData.save('bob');
        expect(mockUserResource.save.calledWith('bob')).toBe(true);
    }))
  })
});