import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
  };
  // console.log(searchFormView);
  new Controller(store, views);
}
