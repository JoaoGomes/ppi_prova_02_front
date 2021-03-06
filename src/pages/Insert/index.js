import React, {useReducer} from 'react';
import Create_user from '../../services/create_user';
import { Link } from 'react-router-dom';
import '../Home/home.css';

const initialState = {
    nome: '',
    senha: '',
    role: ''
}

function reducer (state, {field, value}){
    return {
        ...state, 
        [field]: value
    }
}

function FormInsert() {
    const [state, dispatch] = useReducer (reducer, initialState);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {nome, senha, role} = state;

    function handleSubmit (event) {
        event.preventDefault();
        Create_user(state);
    }

    return (
        <div>
            <form className="form-title">
                REGISTRO DE USUÁRIO
            </form>
            <form onSubmit={handleSubmit} className="form-box">
                <label>Nome: 
                    <input  type='text' name='nome' value={nome} onChange={onChange} />
                </label>
                <label>Senha:
                    <input type='text' name='senha' value={senha} onChange={onChange} />
                </label>
                <label>Role: 
                    <input type='text' name='role' value={role} onChange={onChange} />
                </label>
                <Link type="submit" onClick={handleSubmit} className="btn btn-success" to="/">
                    Registrar
                </Link>
            </form>
            <Link className="btn mainMenuBtn" to="/">Menu principal</Link>
        </div>
    );
};

export default FormInsert;