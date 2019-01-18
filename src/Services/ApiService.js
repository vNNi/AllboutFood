import { newRecipe } from '../Actions/actionCreators';
import store from '../Store/store';
import { push } from 'connected-react-router'
export default (class ApiService {
    constructor() {
        this.url = `https://bdac9743-f229-412e-a2b7-d607d94d86c5.mock.pstmn.io/api/nutrition-details?app_id=33c387e3&app_key=8f59ea5bfa153e2a2099064a3465ba8a`;
    }
    newRecipe(data) {
        console.log(data);
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        fetch(this.url, request)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 500) {
                    throw new Error("server error 500")
                }
            }).then((result) => {
                store.dispatch(newRecipe(result));
            }).then(() => {
                store.dispatch(push("/result"));
                console.log(store.getState().postRecipe);
            })
            .catch((error) => {
                // console.log(error);
            });
    }
})