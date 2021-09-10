import React, {useReducer} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';


const initialState = {
    nome: '',
    senha: '',
}

function reducer (state, {field, value}){
    return {
        ...state, 
        [field]: value
    }
}

function FormLogin () {

    const context = useAuth();

    function handleLogin() {
        context.Login();
    }
    
    const [state, dispatch] = useReducer (reducer, initialState);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {nome, senha} = state;

    function handleSubmit (event) {
        event.preventDefault();
        console.log("Nome: " + nome);
        console.log("Senha: " + senha);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome
                    <input  type='text' name='nome' value={nome} onChange={onChange} />
                </label> <br/>
                <label>Senha: 
                    <input  type='password' name='senha' value={senha} onChange={onChange} />
                </label> <br/>
                <input type="submit" value="Enviar" className="btn btn-success"/>
                <button onClick={handleLogin}>Login</button>
            </form>
            <button><Link to="/">Página inicial</Link></button>
        </div>
    );
};

export default FormLogin;