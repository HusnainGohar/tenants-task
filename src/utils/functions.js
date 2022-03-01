export const callApi = (apiToCall) => {
    return fetch(apiToCall)
        .then(response => response.json())
        .then(data=> {
            return data;
        })
        .catch(error => {throw error})
}