import axios from 'axios';

function Create_city(data){

    axios({
        url: 'http://localhost:3333/cidades',
        method: 'POST',
        data: data
    })
    .then(res=>console.log(res));
}

export default Create_city;