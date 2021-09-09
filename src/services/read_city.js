import axios from 'axios';

async function Read_city(){

    try{
        const response = await axios.get(`http://localhost:3333/cidades/2`);
        if(response.data!=null){
            return response.data.temp;
        }
    } catch(err){
        console.log(err);
    }
}

export default Read_city;

/*
    const response = axios({
        url: 'http://localhost:3333/cidades/2',
        method: 'GET',
    })
    .then(res=>console.log(res.data.id));
*/