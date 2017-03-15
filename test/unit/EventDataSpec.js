'use strict';

describe('userData', function() {
    var mockUserResource;

    beforeEach(module('eventsApp'));

    it('should issue a Get request to /data/event/11 when getEvent is called and the id is 11', inject(function(eventData, $httpBackend) {
            $httpBackend.expectGET('/data/event/11');
            $httpBackend.when('GET', '/data/event/11').respond({});
            eventData.getEvent(11);
            $httpBackend.flush();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        })
    )
  
});