//Mise en place de connecteurs utilisable pour atteindre le backend

import axios from 'axios';//Librairy utilisée pour réaliser les requètes http vers le backend

//se fichier renvoie un connecteur
export default () => {
    return axios.create({
        baseURL: `http://localhost:3000/` //backend API
    });
};