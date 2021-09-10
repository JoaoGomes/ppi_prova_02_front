import React, {useState, useReducer} from 'react';
import { useAuth } from '../../contexts/auth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {

    const [nome, setNome] = useState(null);
    const [temp, setTemp] = useState(null);
    const [temp_min, setTemp_min] = useState(null);
    const [temp_max, setTemp_max] = useState(null);
    const [humidade, setHumidade] = useState(null);
    const [status, setStatus] = useState(null);

    const context = useAuth();

    const initialState = {
        nomeCidade: '',
    }
    
    function reducer (state, {field, value}){
        return {
            ...state, 
            [field]: value
        }
    }

    const [state, dispatch] = useReducer (reducer, initialState);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {nomeCidade} = state;

    function handleLogin() {
        context.Login();
    }

    async function handleSubmit(event){
        event.preventDefault();
        try{
            // useState já coloca o nome na variável certa.
            setNome(nomeCidade);
            const response = await axios.get(`http://localhost:3333/cidades/` + nome );
            if(response.data!=null){
                console.log("Teste api " + response.data.nome);
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

    return (
        <div>
            <h1>Bem-vindo!</h1>
            <button><Link to="/Login">Login</Link></button>
            <h2>Escolha a cidade</h2>
            <form onSubmit={handleSubmit}>
                <input type = 'text' name = 'nomeCidade' value={nomeCidade} onChange={onChange} placeholder="Nome da cidade"/>
                <input type="submit" value="Enviar" className="btn btn-success"/>
            </form>
            <h3>{nome}</h3>
            <p>Temp. atual: {temp}</p>
            <p>Temp. mín: {temp_min}</p>
            <p>Temp. máx: {temp_max}</p>
            <p>Humidade: {humidade}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default Main;
