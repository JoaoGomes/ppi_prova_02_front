import axios from 'axios';

function Delete_city(nome){

    axios({
        url: 'http://localhost:3333/cidades/' + nome,
        method: 'DELETE',
    })
    .then(res=>console.log(res));
    
}

export default Delete_city;