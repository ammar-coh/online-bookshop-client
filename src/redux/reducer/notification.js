const initialState = {
  recipient_id: null,
  notifications: [],
  total_notifications: 0
};

export const notification = (state = initialState, actions) => {
  switch (actions.type) {

    case "notification_real_time":
      console.log("notificattion reducer _realtime", actions.data.data.messages)
      state = {
        recipient_id: actions.data.recipient_id,
        notifications: actions.data.data.messages,
        total_notifications: actions.data.data.total
      }
      return state;

    case "notificationDB":
      state = {
        recipient_id: actions.data.recipient_id,
        notifications: actions.data.notification.messages,
        total_notifications: actions.data.notification.total
      }

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
