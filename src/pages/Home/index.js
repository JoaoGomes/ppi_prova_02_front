import React from 'react';
import { useAuth } from '../../contexts/auth';
import { Link } from 'react-router-dom';

const Home = () => {
    const { Logout } = useAuth();
    const user = JSON.parse(localStorage.getItem('@App:user')).username;

    async function handleLogout() {
        Logout();
    }

    return (
        <div>
            <h1>Bem-vindo, {user}!</h1>
            <button><Link to="/create">Adicionar cidade</Link></button><br/>
            <button><Link to="/update">Modificar tempo de uma cidade</Link></button><br/>
            <button><Link to="/delete">Deletar cidade</Link></button><br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;