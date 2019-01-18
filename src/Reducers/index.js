import { combineReducers } from 'redux';
import reciperReducer from './recipeReducer';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    postRecipe: reciperReducer
}); 