import axios from 'axios';

class AuthService {

    static login = (username, password) => {
        axios.post('/users/login', {username, password}).then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }

    logout = () => {
        window.localStorage.removeItem("currentUrl");
        window.localStorage.removeItem("authData");
    }

    register(username, password, password_confirm, email){
        axios.post('/auth/')
    }

}

export default AuthService;