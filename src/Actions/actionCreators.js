import { POST_RECIPE } from './types';

export function newRecipe(data) {
    return function (dispatch) {
        return dispatch({
            type: POST_RECIPE,
            payload: data
        });
    };
}