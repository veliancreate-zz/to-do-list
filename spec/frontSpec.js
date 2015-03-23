describe('To_do_list', function(){
  
  describe('index', function(){

    beforeEach(function(){
      browser.get('/#');
      element(by.model('todo.content')).sendKeys('Do something!');
      element(by.css('#add-todo')).click();
    });

    it('should have a title', function(){
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('should have a button that adds todos', function(){
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('can add todos', function(){
      element(by.model('todo.content')).sendKeys('Do something else!');
      element(by.css('#add-todo')).click();
      var list = element.all(by.css('#list')).all(by.css('.todo-content'))
      expect(list.getText()).toContain('Do something!', 'Do something else!')
    });


    it('can remove todos', function(){
      element(by.css('.remove-todo')).click();
      expect(element(by.id('list')).getText()).toContain("");
    });

    it('can update todos', function(){
      element(by.css('.edit-todo')).click();
      element(by.model('todo.content')).clear();
      element(by.model('todo.content')).sendKeys('Do something amazing!');
       element(by.css('#update-todo')).click();
      var list = element.all(by.css('#list')).all(by.css('.todo-content'));
      expect(list.getText()).toContain('Do something amazing!');
    });

  });  

});