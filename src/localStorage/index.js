const FAVORITES = "favorites";
const CART = "cart";

function checkAvaiability() {
  let storage;

  try {
    storage = window.localStorage;
    var test = "test1";
    storage.setItem(test, test);
    return true;
  } catch (error) {
    return false;
  }
}

export default class LocalField {
  #storage = window.localStorage;
  constructor(fieldName) {
    this.storageIsAvaiable = checkAvaiability();
    this.fieldName = fieldName;

    console.log(
      `%c New LocalStorage control at ${this.fieldName}`,
      "font-size:1.2rem; color: green;"
    );
  }

  //   get [this.fieldName]() {
  //     const field = this.getField();
  //     return field;
  //   }

  //   set [this.fieldName](newFieldArray) {
  //     if (this.storageIsAvaiable) return false;
  //     this.#storage(this.fieldName, newFieldArray);
  //     return this.getField();
  //   }

  getField() {
    let field = JSON.parse(this.#storage.getItem(this.fieldName));
    console.log(field);
    if (!field) field = [];
    console.log(field);
    return field;
  }

  hasInField(id) {
    const field = this.getField();
    return field.includes(id);
  }

  setField(newFieldArray) {
    if (!this.storageIsAvaiable) return false;

    this.#storage.setItem(this.fieldName, JSON.stringify(newFieldArray));

    return this.getField();
  }

  addToField(id) {
    if (!this.storageIsAvaiable) return false;

    const field = this.getField(this.fieldName);
    if (field.includes(id)) {
      console.log(
        `%cAlready in the ${this.fieldName}`,
        "color: yellow; font-size: 1.2rem;"
      );
      return field;
    }

    let newField = [...field, id];

    this.setField(newField);

    return this.getField();
  }

  removeFromField(fieldItemId) {
    if (!this.storageIsAvaiable) return false;
    let storage = this.#storage;

    const field = this.getField();
    let newField = field.filter((fieldItem) => fieldItem !== fieldItemId);

    this.setField(newField);

    return this.getField();
  }
}
