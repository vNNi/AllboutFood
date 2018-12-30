class ApiService {
    constructor() {
        this.applicationKey = "8f59ea5bfa153e2a2099064a3465ba8a";
        this.applicationID = "33c387e3";
        this.url = "https://api.edamam.com/api/nutrition-details";
    }
    newRecipe(data) {
        const header = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data),
        };
        return new Promise((resolve, reject) => {
            fetch(this.url, header)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }
}