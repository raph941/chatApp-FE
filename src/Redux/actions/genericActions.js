import { ALERT, SHOW_ALERT, CLOSE_ALERT } from './types';


export const alertAction = data => dispatch =>  {  
    dispatch ({
        type: ALERT,
        payload: data
    })
}

export const showAlertAction = data => dispatch =>  {  
    dispatch ({
        type: SHOW_ALERT,
        payload: data
    })
}

export const closeAlert = data => dispatch =>  {  
    
    dispatch ({
        type: CLOSE_ALERT,
        payload: false
    })
}