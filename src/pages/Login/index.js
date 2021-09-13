import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Access_user from '../../services/access';
import '../Home/home.css';

const initialState = {
    username: '',
    password: '',
}

function reducer (state, {field, value}){
    return {
        ...state, 
        [field]: value
    }
}

function FormLogin () {

    const context = useAuth();

    const [state, dispatch] = useReducer (reducer, initialState);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {username, password} = state;

    function handleSubmit (event) {
        event.preventDefault();
        Access_user(state);    
        context.Login();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}  className="form-box">
                <h1 className="form-title">Login</h1>
                <label>Nome
                    <input  type='text' name='username' value={username} onChange={onChange} />
                </label>
                <label>Senha: 
                    <input  type='password' name='password' value={password} onChange={onChange} />
                </label>
                <Link type="submit" onClick={handleSubmit} className="btn btn-success" to="/">
                    Acessar
                </Link>
            </form>
            <Link className="btn mainMenuBtn" to="/">Página inicial</Link>
        </div>
    );
};

export default FormLogin;
