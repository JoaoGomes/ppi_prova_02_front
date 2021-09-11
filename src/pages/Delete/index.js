import React, {useReducer} from 'react';
import Delete_city from '../../services/delete_city';
import { Link } from 'react-router-dom';

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
            <form onSubmit={handleSubmit}>
                <label>Nome da cidade: 
                    <input  type='text' name='nome' value={nome} onChange={onChange} />
                </label> <br/>
                <button type="submit" onClick={handleSubmit} className="btn btn-success">
                    <Link to="/">Enviar</Link>
                </button>
            </form>
            <button><Link to="/">Menu principal</Link></button>
        </div>
    );
};

export default FormDelete;