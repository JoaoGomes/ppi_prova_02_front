import React from 'react';
import { useAuth } from '../../contexts/auth';

const nome = '';

const Login = () => {
    const context = useAuth();
    console.log(context);

    function handleLogin() {
        context.Login();
    }
    return (
        <div>
            <h1>Bem-vindo!</h1>
            <button onClick={handleLogin}>Login</button>
            <h2>Escolha a cidade</h2>
            <form>
                < label >Nome:
                    < input type = 'text' name = 'nome' value = { nome }/>
                </ label >< br />
                < input type = "submit" value = "Enviar" />
            </form>
        </div>
    );
};

export default Login;