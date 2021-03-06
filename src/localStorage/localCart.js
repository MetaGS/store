const FAVORITES = "favorites";
const CART = "cart";
const CART_ORDERS = "cartOrders";

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

  includes(idHash) {
    const field = this.getField();

    const doesInclude = field.find((cartOrder) => {
      return cartOrder.cartOrderId === idHash;
    });
    return !!doesInclude;
  }

  setField(newFieldArray) {
    if (!this.storageIsAvaiable) return false;

    this.#storage.setItem(this.fieldName, JSON.stringify(newFieldArray));

    return this.getField();
  }

  addToField(cartOrderObject) {
    if (!this.storageIsAvaiable) return false;

    const field = this.getField(this.fieldName);
    if (this.includes(cartOrderObject.cartOrderId)) {
      console.log(
        `%cAlready in the ${this.fieldName}`,
        "color: yellow; font-size: 1.2rem;"
      );
      return field;
    }

    let newField = [...field, cartOrderObject];

    this.setField(newField);
    return this.getField();
  }

  updateItemInField(cartOrderObject) {
    if (!this.storageIsAvaiable) return false;
    let field = this.getField(this.fieldName);

    if (this.includes(cartOrderObject.cartOrderId)) {
      field = field.filter(
        (order) => cartOrderObject.cartOrderId !== order.cartOrderId
      );
    }

    let newUpdatedField = [...field, cartOrderObject];

    this.setField(newUpdatedField);
    return newUpdatedField;
  }

  removeFromField(fieldItemId) {
    if (!this.storageIsAvaiable) return false;
    let storage = this.#storage;

    const field = this.getField();
    let newField = field.filter(
      (fieldOrderItem) => fieldOrderItem.cartOrderId !== fieldItemId
    );

    this.setField(newField);

    return this.getField();
  }
}
