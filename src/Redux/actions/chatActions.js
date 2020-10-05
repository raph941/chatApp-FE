import { SEARCH_USER } from './types'


export const alertAction = data => dispatch =>  {  
    dispatch ({
        type: SEARCH_USER,
        payload: data
    })
}