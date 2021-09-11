import React, {useReducer} from 'react';
import Create_user from '../../services/create_user';
import { Link } from 'react-router-dom';

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
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                REGISTRO DE USUÁRIO
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                            <label>
                                NOME: 
                                <input  type='text' name='nome' value={nome} onChange={onChange} />
                            </label>
                            </th>
                            <th colSpan="1">
                            <label>
                                SENHA:
                                <input type='text' name='senha' value={senha} onChange={onChange} />
                            </label>
                            </th>
                        </tr>
                        <tr>
                            <th colSpan="1">
                            <label>
                                Role: 
                                <input type='text' name='role' value={role} onChange={onChange} />
                            </label>
                            </th>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="1">
                                <button type="submit" onClick={handleSubmit} className="btn btn-success">
                                    <Link to="/">Enviar</Link>
                                </button>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </form>
            <button><Link to="/">Menu principal</Link></button>
        </div>
    );
};

export default FormInsert;