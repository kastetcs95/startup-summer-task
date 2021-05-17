import * as axios from 'axios';

export const githubAPI = {
    async getUser(username) {
        return await axios.get(`https://api.github.com/users/${username}`)
            .then(response => response.data)
            .catch(error => {
                console.log(error.response);
                return error.response;
            })
    },
    async getRepos(username, currentPage) {
        return await axios.get(`https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=4`)
            .then(response => response.data)
            .catch(error => {
                console.log(error.response);
                return error.response;
            })
    }
}