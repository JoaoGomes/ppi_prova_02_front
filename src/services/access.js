import axios from 'axios';
import api from '../services/api';

async function Access_user(data){

    await axios({
        url: 'http://localhost:3333/login',
        method: 'POST',
        data: data
    })
    .then(res=>{
        console.log(res.config.data)
        console.log(res);
        localStorage.setItem('@App:user', JSON.stringify(res.data.user));
        localStorage.setItem('@App:accessToken', res.data.accessToken);
        console.log("Aqui está o usuario: "+ res.data.user.username);
    
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`;
    });

}

export default Access_user;