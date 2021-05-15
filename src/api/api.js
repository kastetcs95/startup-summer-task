import * as axios from 'axios';

export const userAPI = {
    async getUser(username) {
        return await axios.get(`https://api.github.com/users/${username}`)
            .then(response => response.data)
            .catch(error => {
                console.log(error.response);
                return error.response;
            })
    },
    async getRepos(username) {
        return await axios.get(`https://api.github.com/users/${username}/repos`)
            .then(response => response.data)
            .catch(error => {
                console.log(error.response);
                return error.response;
            })
    }
}