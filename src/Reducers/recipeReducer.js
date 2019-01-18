import { POST_RECIPE } from '../Actions/types';
const initialState = {
    result: [],
};
export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case POST_RECIPE:
            return {
                result: action.payload
            }
        default:
            return state;
    }
}