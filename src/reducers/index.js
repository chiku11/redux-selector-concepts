import { UPDATE_FIELD_STATE } from '../constants/action-types';

const initialState = {
    email: '',
    password: '',
    country: '',
    maritialstatus: '',
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD_STATE:
            console.log(`Updating ${action.payload.type}`)
            return Object.assign({}, state, action.payload
            );
        default:
            return state;    
    }
};
export default rootReducer;