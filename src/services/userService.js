import api from '../api';

class UserService {
    login = (username, password) => {
        return api
            .post(`/users/login`, { username, password })
            .then(response => response)
            .catch(error => {
                throw error;
            });
    };

    getUser = token => {
        return api
            .get(`/users/me`, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => response)
            .catch(error => {
                throw error;
            });
    };
}

export default new UserService();
