const initialState = [];

export const notification = (state = initialState, actions) => {
  switch (actions.type) {
   
    case "notification_receive":
      console.log("cjhed", actions.data)
      state = [...state, actions.data];
      return state;

    case "notificationDB":
      state = [...state, actions.data];
      state = actions.data.data.messages;
      return state;

    case "clearNotificationMessages":
      state = [];
      return state;

    default:
      return state;
  }
};
