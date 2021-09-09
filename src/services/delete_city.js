import axios from 'axios';

function Delete_city(id){

    axios({
        url: 'http://localhost:3333/cidades/'+id,
        method: 'DELETE',
    })
    .then(res=>console.log(res));
    
}

export default Delete_city;