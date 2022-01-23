import { notification } from 'antd';
import NotificationTypes from '../constants/NotificationTypes';

const notificationConfig = (message, description, duration = 2) => {
  return {
    message: message,
    description: description,
    duration: duration,
  };
};

const showNotification = (message, description, statusType = null) => {
  switch (statusType) {
    case NotificationTypes.Success:
      notification.success(notificationConfig(message, description));
      break;
    case NotificationTypes.Error:
      notification.error(notificationConfig(message, description));
      break;
    default:
      notification.open(notificationConfig(message, description));
      break;
  }
};

export default showNotification;
