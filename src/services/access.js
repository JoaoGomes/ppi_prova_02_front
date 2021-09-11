import axios from 'axios';
import api from '../services/api';

async function Access_user(data){

    await axios({
        url: 'http://localhost:3333/login',
        method: 'POST',
        data: data
    })
    .then(res=>{
        localStorage.setItem('@App:user', JSON.stringify(res.data.user));
        localStorage.setItem('@App:accessToken', res.data.accessToken);
            
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`;
    });

}

export default Access_user;