const initialState = {
  details: [],
  header: "Ammar",
};

export const productDetails = (state = initialState, actions) => {
  switch (actions.type) {
    case "set":
      var check = {
        ...state,
        details: [...actions.details],
      };

      return check;

    case "updateDetails":
      let findIndex = state.details.findIndex(
        (item) => item.id === actions.data.id
      );
      let update = state.details.map(el => {
        return el.id === actions.data.id ? { ...el, ...actions.data } : el
      })
      console.log("details new", update)
      return {
        ...state,
        details: update


      };

    case "deleteDetails":
      var index = state.details.findIndex((i) => i.id === actions.data.id);
      var final = state.details.splice(index, 1);
      var newState = state.details;

      return { details: [...state.details], header: "delete" };
    case "addDetails":
      console.log("initial state", state.details);
      var item = actions.data;
      var det = state.details;
      console.log("det", det);
      return { ...state, details: [...det, item], header: "added" };




    default:
      return state;
  }
};
