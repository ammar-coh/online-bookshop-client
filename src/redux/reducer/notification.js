const initialState = {
  recipient_id: null,
  notifications: [],
  total_notifications: 0
};

export const notification = (state = initialState, actions) => {
  switch (actions.type) {

    case "notification_real_time":
      state = {
        recipient_id: actions.data.recipient_id,
        notifications: actions.data.data.messages,
        total_notifications: actions.data.data.total
      }
      return state;

    case "notificationDB":
      state = [...state, actions.data];
      state = actions.data.data.messages;
      return state;
    case "delete_notification":
      state = {
        recipient_id: actions.data.recipient_id,
        notifications: actions.data.data.messages,
        total_notifications: actions.data.data.total
      }
      return state;
    case "clearNotificationMessages":
      state = [];
      return state;

    default:
      return state;
  }
};
