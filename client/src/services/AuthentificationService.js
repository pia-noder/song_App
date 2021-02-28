//fichier utiliser pour atteindre le endpoint register

import API from '@/services/API';

export default {
    //Création des méthodes pour l'objet API (=objet axios)
    register (credentials)  {
        //création d'un objet qui va permettre d'appeler une méthode 'register' qui va être reliée à l'endpoint 'register'
        //On définit ici le type d'action HTTP que l'on veut envoyer vers le endpoint
        return API().post('register', credentials)
        //= axios.post('register);
    },

    posts () {
        return API().get('posts')
    },

};

/*AuthentificationService.register({
    email: 'testing@gmail.com',
    password: 'Test123!'
});*/