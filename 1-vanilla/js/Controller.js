const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(searchFormView);
    this.store = store;
    this.searchFormView = searchFormView;
    // TODO
  }
}
