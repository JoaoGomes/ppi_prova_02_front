import React from 'react';
import { useAuth } from '../../contexts/auth';

const Home = () => {
    const { Logout } = useAuth();
    const user = JSON.parse(localStorage.getItem('@App:user')).username;

    async function handleLogout() {
        Logout();
    }

    async function handleCreate(){

    }
    async function handleUpdate(){

    }
    async function handleDelete(){

    }

    return (
        <div>
            <h1>Home</h1>
            <h2>Bem-vindo, {user}!</h2>
            <button onClick={handleCreate}>Adicionar cidade</button><br/>
            <button onClick={handleUpdate}>Modificar tempo de uma cidade</button><br/>
            <button onClick={handleDelete}>Deletar cidade</button><br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;