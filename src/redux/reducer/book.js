const initialState = {
  details: [],
};

export const books = (state = initialState, actions) => {
  switch (actions.type) {
    case "set":
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

    case "deleteBookFromList":
      var index = state.details.findIndex((i) => i._id === actions.data.payload);
      state.details.splice(index, 1);
      return { details: [...state.details]};

    case "addBookToList":
      var newBook = actions.data;
      var allBooks = state.details;
      return { ...state, details: [...allBooks, newBook]};
      default:
      return state;
  }
};
