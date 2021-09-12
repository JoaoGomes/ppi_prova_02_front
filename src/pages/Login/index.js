import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Access_user from '../../services/access';
import './login.css';

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
        <div className="form-box">
            <h1 className="form-title">Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome
                    <input  type='text' name='username' value={username} onChange={onChange} />
                </label> <br/>
                <label>Senha: 
                    <input  type='password' name='password' value={password} onChange={onChange} />
                </label> <br/>
                <input type="submit" value="Login" className="btn btn-success"/>
            </form>
            <button className="submitBtn"><Link to="/">Página inicial</Link></button>
        </div>
    );
};

export default FormLogin;
