describe('ToDoController', function() {
  beforeEach(module('toDoList'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDoController', { $scope: scope });
  }));

  it('initialises with empty todo lists', function() {
    expect(scope.todo).toBeUndefined();
    expect(scope.todolist).toBeUndefined();
  });

  describe('when entering a todo', function() {

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "/todolist")
        .respond(
        { items: items }
      );
    }));

    var items = [
      {
        content: "walk dog"  
      },
      {
        content: "take out rubbish"
      }
    ];

    it('displays todo lists', function() { 
      scope.$apply();
      httpBackend.flush();
      expect(scope.todolist.items).toEqual(items);
    });

  });  

});