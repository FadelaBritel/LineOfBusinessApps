'use strict';

describe('event registration app', function(){
    describe('event page', function(){
        beforeEach(function(){
            browser.get('http://localhost:8000/Events');
        });

        it('should have the correct title and first event', function(){
            var list=element.all(by.repeater('event in events'));
            expect(list.count()).toEqual(5);
            var titleElement=element(by.binding('event.name'));
            expect(titleElement.getText()).toEqual('Angular Boot Camp');
        });
    });

    describe('event detail page', function(){
        beforeEach(function(){
            browser.get('http://localhost:8000/Event/1');
        });

        it('should sort by name', function(){
            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(3);
            var titleElement=list.first().element(by.binding('title'));
            expect(titleElement.getText()).toEqual('Directives Masterclass');
        });

        it('should have 1 session when introductory is chosen', function(){
            var selectEl = element(by.model('query.level'));
            selectEl.element(by.cssContainingText('option', 'Introductory')).click();
            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(1);
        });
    });


})