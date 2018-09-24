import { expect } from 'chai';

import TodoListPage from '../pageObjects/TodoList.page';

describe('Add items', () => {
  before(() => {
    browser.url('http://localhost:3000');
  });

  it('with button', () => {
    TodoListPage.addItemInput.setValue('item#1');
    TodoListPage.addItemButton.click();

    expect(TodoListPage.todoListItems.length).to.be.equal(1);
  });

  it('with enter key', () => {
    TodoListPage.addItemInput.setValue('item#1');
    TodoListPage.addItemInput.keys('Enter');

    expect(TodoListPage.todoListItems.length).to.be.equal(2);
  });
});
