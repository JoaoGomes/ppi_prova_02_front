import React, {useState, useReducer} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './main.css';

const Main = () => {

    const [nome, setNome] = useState(null);
    const [temp, setTemp] = useState(null);
    const [temp_min, setTemp_min] = useState(null);
    const [temp_max, setTemp_max] = useState(null);
    const [humidade, setHumidade] = useState(null);
    const [status, setStatus] = useState('background');

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

    async function handleSubmit(event){
        event.preventDefault();
        try{
            // useState já coloca o nome na variável certa.
            setNome(nomeCidade);
            const response = await axios.get(`http://localhost:3333/cidades/` + nome );
            if(response.data!=null){
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
        <div className="main">
            <Link className="btn-login" to="/Login">Login</Link>
            <h1 className="title" >Bem-vindo!</h1> 

            <form onSubmit={handleSubmit} className="form-box-main">
                <h2 className="text-h2" >Escolha a cidade</h2>
                <input type = 'text' name = 'nomeCidade' value={nomeCidade} onChange={onChange} placeholder="Nome"/>
                <Link type="submit" onClick={handleSubmit} className="btn-main btn-success" to="/">
                    Enviar
                </Link>
            </form>
            <form className="view-outside">
                
                <form className="view-outside">
                <img className="image" src={require(`../../images/` + status + '.png').default} alt="status"/>
                    <h3 className="city-title" >{nome}</h3>
                    <p className="simple-text" >Temp. atual: {temp}</p>
                    <p className="simple-text" >Temp. mín: {temp_min}</p>
                    <p className="simple-text" >Temp. máx: {temp_max}</p>
                    <p className="simple-text" >Humidade: {humidade}%</p>
                    <p className="simple-text" >Status: {status}</p>
                </form>                
            </form>
        </div>
    );
};

export default Main;
