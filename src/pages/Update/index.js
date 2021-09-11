import React, {useReducer} from 'react';
import Update_city from '../../services/update_city';
import { Link } from 'react-router-dom';

const initialState = {
    nome: '',
    temp: '',
    temp_min: '',
    temp_max: '',
    humidade: '',
    status: '',
}

function reducer (state, {field, value}){
    return {
        ...state, 
        [field]: value
    }
}

function FormUpdate () {
    const [state, dispatch] = useReducer (reducer, initialState);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {nome, temp, temp_min, temp_max, humidade, status} = state;

    function handleSubmit (event) {
        event.preventDefault();
        Update_city(state);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                REGISTRO DO TEMPO
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
                                Temperatura:
                                <input type='text' name='temp' value={temp} onChange={onChange} />
                            </label>
                            </th>
                        </tr>
                        <tr>
                            <th colSpan="1">
                            <label>
                                Temperatura Mínima: 
                                <input type='text' name='temp_min' value={temp_min} onChange={onChange} />
                            </label>
                            </th>
                            <th colSpan="1">
                            <label>
                                Temperatura Máxima:
                                <input type='text' name='temp_max' value={temp_max} onChange={onChange} />
                            </label>
                            </th>
                        </tr>
                        <tr>
                            <th colSpan="1" >
                            <label>
                                Humidade:
                                <input type='text' name='humidade' value={humidade} onChange={onChange} />
                            </label>
                            </th>
                        </tr>
                        <tr>
                            <th colSpan="1">
                            <label>
                                Status:
                                <input type='text' name='status' value={status} onChange={onChange} />
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

export default FormUpdate;