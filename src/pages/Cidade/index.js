import React, { useState } from 'react';
import axios from 'axios';

function Cidade(){

    const [nome, setNome] = useState(null);
    const [temp, setTemp] = useState(null);
    const [temp_min, setTemp_min] = useState(null);
    const [temp_max, setTemp_max] = useState(null);
    const [humidade, setHumidade] = useState(null);
    const [status, setStatus] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try{
            const response = await axios.get(`http://localhost:3333/cidades/1`);
            if(response.data!=null){
                console.log(response.data.id);
                setNome(response.data.nome);
                setTemp(response.data.temp);
                setTemp_min(response.data.temp_min);
                setTemp_max(response.data.temp_min);
                setHumidade(response.data.humidade);
                setStatus(response.data.status);
            }
        } catch(err){
            console.log(err);
        }
    }
    
    return(
        <div>
            <button onClick={handleSubmit}>Apertar</button>
            <h3>{nome}</h3>
            <p>Temp. atual: {temp}</p>
            <p>Temp. mín: {temp_min}</p>
            <p>Temp. máx: {temp_max}</p>
            <p>Humidade: {humidade}</p>
            <p>Status: {status}</p>
        </div>
    )
}

export default Cidade;