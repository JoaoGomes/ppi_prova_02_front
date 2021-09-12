import React from 'react';
import { useAuth } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import '../Create/create.css';

const Home = () => {
    const { Logout } = useAuth();
    const user = JSON.parse(localStorage.getItem('@App:user')).username;

    async function handleLogout() {
        Logout();
    }

    return (
        <div>
            <label className="form-title-home">Bem-vindo, {user}!</label>

            <form className="form-box">
                <label><Link className="btn btn-success" to="/create">Adicionar cidade</Link></label>
                <label><Link className="btn btn-success" to="/update">Modificar tempo de uma cidade</Link></label>
                <label><Link className="btn btn-success" to="/delete">Deletar cidade</Link></label>
                <label><Link className="btn btn-success" to ="/insert">Adicionar usuário</Link></label>
            </form>
            <label className="btn mainMenuBtn" onClick={handleLogout}>Logout</label>
        </div>
    );
};

export default Home;