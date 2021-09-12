import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Create_city from '../../services/create_city';
import './create.css';

const initialState = {
    nome: '',
    temp: '',
    temp_min: '',
    temp_max: '',
    humidade: '',
    status: '',
}

function reducer (state, {field, value}){
    return {
        ...state, 
        [field]: value
    }
}

function UserFormReducer () {
    const [state, dispatch] = useReducer (reducer, initialState);
    
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {nome, temp, temp_min, temp_max, humidade, status} = state;

    function handleSubmit (event) {
        event.preventDefault();
        console.log(state);
        Create_city(state);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-box">
                <label className="form-title">
                    REGISTRO DO TEMPO 
                </label>
                <label>
                    Nome: 
                    <input  type='text' name='nome' value={nome} onChange={onChange} />
                </label>
                <label>
                    Temperatura:
                    <input type='text' name='temp' value={temp} onChange={onChange} />
                </label>
                <label>
                    Temperatura Mínima: 
                    <input type='text' name='temp_min' value={temp_min} onChange={onChange} />
                </label>
                <label>
                    Temperatura Máxima:
                    <input type='text' name='temp_max' value={temp_max} onChange={onChange} />
                </label>
                <label>
                    Humidade:
                    <input type='text' name='humidade' value={humidade} onChange={onChange} />
                </label>
                <label >Status: 
                    <select className="status" name='status' value={status} onChange={onChange}>
                        <option value="Ensolarado">Ensolarado</option>
                        <option value="Chovendo">Chovendo</option>
                        <option value="Nublado">Nublado</option>
                        <option value="Nevando">Nevando</option>
                    </select>
                </label>
                <Link type="submit" onClick={handleSubmit} className="btn btn-success" to="/">
                    Enviar
                </Link>
            </form>
            <Link className="btn mainMenuBtn" to="/">Menu principal</Link>
        </div>
    );
};

export default UserFormReducer;