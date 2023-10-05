const initialState = {
  details: {
    token: "",
    user: {
      id: "",
      displayName: "",
      is_online: false,
      role: "basic"
    },
    status: false,
    message: ""
  },
};

export const user_login = (state = initialState, actions) => {
  switch (actions.type) {
    case "sign_in_reducer":
      return {
        details: actions.data,
      };
      case "sign_in_error_message":
        return {
          details: actions.data,
        };
        case "sign_out_reducer":
          return {
            details: initialState.details
          };
      
    case "sign_in_error_message":
      return {
        details: actions.data,
      };

    default:
      return state;
  }
};
