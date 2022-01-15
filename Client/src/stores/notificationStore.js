import ActionTypes from '../stores/types';

export const StatusType = {
    Success:'Success',
    Error:'Error',
    None:'None'
}


export const displayNotification = (message, statusType) => ({
    type: ActionTypes.NOTIFICATION,
    message:message,
    statusType: statusType
})

let initialState = {
    message:'',
    statusType:StatusType.None
}

export default function notificationReducer(state = initialState, { type, message, statusType }){
    switch (type) {
    case ActionTypes.NOTIFICATION:
        return { ...state, message, statusType }
    default:
        return state
    }
}
