
const initialState = {
  roomID: null,
  messages: []
};

export const chat = (state = initialState, actions) => {
  switch (actions.type) {

    case "receive":
      state = {
        roomID: actions.data.roomID,
        messages: actions.data.messages
      }

      return state;

    case "chat from DB":
      state = {
        roomID: actions.data.data.roomID,
        messages: actions.data.data.messages
      }
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
