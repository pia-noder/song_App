//fichier utiliser pour atteindre le endpoint register

import API from '@/services/API';

export default {
    //intégre des méthodes
    register (credentials)  {
        //création d'un objet qui va permettre d'appeler une méthode 'register' qui va être reliée à l'endpoint 'register'
        return API().post('register', credentials)
    }
};

/*AuthentificationService.register({
    email: 'testing@gmail.com',
    password: 'Test123!'
});*/