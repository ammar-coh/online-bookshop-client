const initialState = [];

export const chat = (state = initialState, actions) => {
  switch (actions.type) {
   
    case "receive":
      console.log("cjhed", actions.type)
      state = [...state, actions.data];
      return state;

    case "chat from DB":
      state = [...state, actions.data];
      state = actions.data.data.messages;
      return state;

    case "clearChatRoom":
      state = [];
      return state;

    default:
      return state;
  }
};
