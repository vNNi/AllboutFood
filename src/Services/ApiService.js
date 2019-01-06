export default class ApiService {
    constructor() {
        this.url = `https://api.edamam.com/api/nutrition-details?app_id=33c387e3&app_key=8f59ea5bfa153e2a2099064a3465ba8a`;
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
        return new Promise((resolve, reject) => {
            fetch(this.url, request)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }
}