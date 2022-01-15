import React, { useEffect } from 'react'
import {notification} from 'antd'
import {useSelector} from 'react-redux';
import { StatusType } from '../../stores/notificationStore';

function Notification() {

const notificationState = useSelector(state => state.notification);

useEffect(() => {
    switch (notificationState.statusType) {
        case StatusType.Success:
            notification.success({message:notificationState.message});
            break;
        case StatusType.Error:
            notification.error({message:notificationState.message});
        default:
            break;
    }
}, [notificationState])

    return (
        <div>
            
        </div>
    )
}

export default Notification
