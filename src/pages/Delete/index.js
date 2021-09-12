import React, {useReducer} from 'react';
import Delete_city from '../../services/delete_city';
import { Link } from 'react-router-dom';
import '../Create/create.css';

const initialState = {
    nome: '',
}

function reducer (state, {field, value}){
    return {
        ...state, 
        [field]: value
    }
}

function FormDelete () {
    const [state, dispatch] = useReducer (reducer, initialState);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {nome} = state;

    function handleSubmit (event) {
        event.preventDefault();
        Delete_city(nome);
    }

    return (
        <div>
            <form className="form-title">
                REMOÇÃO DE CIDADE
            </form>
            <form onSubmit={handleSubmit} className="form-box">
                <label>Nome: 
                    <input  type='text' name='nome' value={nome} onChange={onChange} />
                </label>
                <Link type="submit" onClick={handleSubmit} className="btn btn-success" to="/">
                    Deletar
                </Link>
            </form>
            <Link className="btn mainMenuBtn" to="/">Menu principal</Link>
        </div>
    );
};

export default FormDelete;