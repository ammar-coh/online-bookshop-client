
const initialState = {
  roomID: null,
  messages: []
};

export const chat = (state = initialState, actions) => {
  switch (actions.type) {

    case "receive":
      console.log("cjhed", actions.data)
      state = {
        roomID: actions.data.roomID,
        messages: actions.data.messages
      }

      // state = [...state, actions.data];
      return state;

    case "chat from DB":
      console.log("chat from DB Reducer", actions.data.data)
      state = {
        roomID: actions.data.data.roomID,
        messages: actions.data.data.messages
      }
      // actions.data.data.messages;
      return state;

    case "clearChatRoom":
      state = {
        roomID: null,
        messages: []
      };
      return state;

    default:
      return state;
  }
};
