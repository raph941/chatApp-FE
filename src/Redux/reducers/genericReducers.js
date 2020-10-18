import { ALERT, SHOW_ALERT, CLOSE_ALERT } from '../actions/types';

let initialState = {
    alert_level: 'success',
    show_alert: false,
    alert_message: true,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ALERT:
            return {
                ...state,
                alert_level: action.payload.alert_level,
                alert_message: action.payload.alert_message
            }
        case SHOW_ALERT:
            return {
                ...state,
                show_alert: action.payload,
            }
        case CLOSE_ALERT:
            return {
                ...state,
                show_alert: action.payload,
            }
        default:
            return state;
    }
}