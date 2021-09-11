import axios from 'axios';

function Create_user(data){

    axios({
        url: 'http://localhost:3333/usuarios',
        method: 'POST',
        data: data
    })
    .then(res=>console.log(res));
}

export default Create_user;