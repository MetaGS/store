import updateField from "./updateField";

const userUpdate = updateField.bind(null, "users");

export const addCartOrderObject = (userId, field, newOrder) => {
  console.log(
    "%cIt is called addCartOrder",
    "color:green; font-size:1.2rem;padding-bottom:5px;border-bottom: 1px solid green;"
  );

  const filter = (dbField) => {
    const excludeItem = dbField.filter((dbItem) => {
      return dbItem.cartOrderId !== newOrder.cartOrderId; // checking to does not double include;
    });
    return [...excludeItem, newOrder];
  };

  return userUpdate(userId, field, newOrder, undefined, filter);
};

export const updateCartOrderObject = (userId, field, updatingOrder) => {
  const filter = (dbField) => {
    const filteredOrder = dbField.filter((dbOrder) => {
      return dbOrder.cartOrderId !== updatingOrder.cartOrderId;
    });

    return [...filteredOrder, updatingOrder];
  };

  return userUpdate(userId, field, undefined, undefined, filter);
};

export const removeCartOrderById = (userId, field, removeId) => {
  const filter = (dbField) => {
    return dbField.filter((dbItem) => {
      return dbItem.cartOrderId !== removeId;
    });
  };

  return userUpdate(userId, field, undefined, undefined, filter);
};

export const mergeCartOrders = (userId, field, mergeCartOrdersArray) => {
  const filter = (dbField) => {
    return [
      ...mergeCartOrdersArray.filter((newCartOrder) => {
        return !dbField.find((dbCartOrder) => {
          return dbCartOrder.cartOrderId === newCartOrder.cartOrderId;
        });
      }),
      ...dbField,
    ];
  };

  return userUpdate(userId, field, undefined, undefined, filter);
};
