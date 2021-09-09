import axios from 'axios';

function Update_city(id){

    axios({
        url: 'http://localhost:3333/cidades/'+id,
        method: 'PUT',
    })
    .then(res=>console.log(res));
    
}

export default Update_city;