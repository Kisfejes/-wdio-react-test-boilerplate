class TodoListPage {
  get addItemInput() {
    return $('#root > div > div:nth-child(1) > input[type="text"]');
  }

  get addItemButton() {
    return $('#root > div > div:nth-child(1) > button');
  }

  get todoListItem() {
    return $('#root > div > div.app-todo-list > div.todo-item-container');
  }
}
