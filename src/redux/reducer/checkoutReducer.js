const initialState = {
  _id: "",
  products: [],
  totalItems: 0,
};

export const checkoutreducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "setProductsToCartReducer":
      if (actions.data == "No Cart in user database") {
        return (state = {
          _id: "",
          products: [],
          totalItems: 0,
        });
      } else if (actions.data == null) {
        return state;
      } else {
        state = actions.data;
      }
      return state;
    case "addToCartReducer":
      let updated;
      state = actions.data.data;
      return state;


    case "removeFromCartReducer":
      state = actions.data;
      return state;

    case "resetCart":
      state = [];
      return state;

    default:
      return state;
  }
};
