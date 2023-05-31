const initialState = {
  details: [],
};

export const user_login = (state = initialState, actions) => {
  switch (actions.type) {
    case "sign_in_reducer":
      return {
        details: actions.data,
      };

    default:
      return state;
  }
};
