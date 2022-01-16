import { notification } from 'antd';

const showNotification = (message, statusType) => {
  switch (statusType) {
    case 'Success':
      notification.success({ message: message });
      break;
    case 'Error':
      notification.error({ message: message });
      break;
    default:
      break;
  }
};

export default showNotification;
