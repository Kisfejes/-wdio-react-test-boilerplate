export default class TodoListPage {
  static get addItemInput() {
    return $('#root > div > div:nth-child(1) > input[type="text"]');
  }

  static get addItemButton() {
    return $('#root > div > div:nth-child(1) > button');
  }

  static get todoListItems() {
    return $$('#root > div > div.app-todo-list div.todo-item-name');
  }
}
