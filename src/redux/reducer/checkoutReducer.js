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
      //console.warn('reducer',actions)
      let updated;
      state = actions.data.data;
      return state;

    //console.log("last reducer cart",state)

    case "removeFromCartReducer":
      // var index= state.indexOf(actions.data.delete)
      state = actions.data;
      return state;

    case "resetCart":
      state = [];
      return state;

    default:
      return state;
  }
};
