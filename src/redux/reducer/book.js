const initialState = {
  details: [],
  header: "Ammar",
};

export const books = (state = initialState, actions) => {
  switch (actions.type) {
    case "set":
      console.log("actions.data",actions)
      var check = {
        ...state,
        details: [...actions.details],
      };

      return check;

    case "updateBookList":
      let findIndex = state.details.findIndex(
        (item) => item._id === actions.data._id
      );
      if (findIndex !== -1) {
        // Create a new array with the updated object
        const updatedArray = [
          ...state.details.slice(0, findIndex),
          actions.data,
          ...state.details.slice(findIndex + 1)
        ];
    
        // Update the state with the new array
        const newState = { ...state, details: updatedArray };
        return newState;
      }
    
      return state;
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
