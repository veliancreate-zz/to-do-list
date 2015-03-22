describe('To_do_list', function(){
  
  it('should have a title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('To Do List');
  });

});