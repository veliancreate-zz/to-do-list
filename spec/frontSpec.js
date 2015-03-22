describe('To_do_list', function(){
  
  describe('index', function(){

    beforeEach(function(){
      browser.get('/#');
    });

    it('should have a title', function(){
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('should have a button that adds todos', function(){
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('can add todos', function(){
      element(by.model('todo.content')).sendKeys('Do something!');
      element(by.css('#add-todo')).click();
      var todoList = element.all(by.repeater('item in todolist'));
      expect(todoList.count()).toEqual(1);
      expect(todoList.get(1).getText()).toEqual('Do something!');
    });  
  });  

});