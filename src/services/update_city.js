import axios from 'axios';

function Update_city(data, id){

    axios({
        url: 'http://localhost:3333/cidades/'+ id.id,
        method: 'PUT',
        data: data

    })
    .then(res=>console.log(res));
    
}

export default Update_city;