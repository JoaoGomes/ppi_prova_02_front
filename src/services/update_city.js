import axios from 'axios';

function Update_city(data){

    axios({
        url: 'http://localhost:3333/cidades/' + data.nome,
        method: 'PUT',
        data: data

    })
    .then(res=>console.log(res));
    
}

export default Update_city;