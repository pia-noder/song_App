//Mise en place de connecteurs utilisable pour atteindre le backend

import axios from 'axios';//Librairy utilisée pour réaliser les requètes http vers le backend

//se fichier renvoie un connecteur
//Création d'une nouvelle instance d'axios avec la configuration de l'URL du serveur qui nous intéresse
export default () => {
    return axios.create({
        baseURL: `http://localhost:3000/` //backend API
    });
};