'use strict';

describe('durations', function() {
    beforeEach(module('eventsApp'));
    it('should return half hour when we give 1', inject(function(durationFilter){
        expect(durationFilter(1)).toEqual('Half Hour');
    }))
});