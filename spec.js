describe('To_do_list', function(){
  it('should have a title', function(){
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('To Do List');
  });
});