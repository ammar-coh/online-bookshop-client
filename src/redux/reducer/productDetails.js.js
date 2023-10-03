const initialState = {
  details: [],
  header: "Ammar",
};

export const productDetails = (state = initialState, actions) => {
  switch (actions.type) {
    case "set":
      console.log("actions.data",actions)
      var check = {
        ...state,
        details: [...actions.details],
      };

      return check;

    case "updateBookList":
      console.log("updated book", actions.data)
      let findIndex = state.details.findIndex(
        (item) => item.id === actions.data.id
      );
      console.log("index",findIndex)
      console.log("state", state)
       state.details.splice(findIndex,1,actions.data)
      console.log("state_updated",state )
    
      // return {
      //   ...state,
      //   details: update


      // };

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
