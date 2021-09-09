import React, {useReducer} from 'react';
import Update_city from '../../services/update_city';

const initialState = {
    nome: '',
    temp: '',
    temp_min: '',
    temp_max: '',
    humidade: '',
    status: '',
    id: '',
}

const idState ={
    id: ''
}

function reducer (state, {field, value}){
    return {
        ...state, 
        [field]: value
    }
}

function FormUpdate () {
    const [state, dispatch] = useReducer (reducer, initialState);
    const [idTarget, dispatch2] = useReducer (reducer, idState);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
        dispatch2({field: e.target.name, value: e.target.value})
    }

    const {id} = idTarget;
    const {nome, temp, temp_min, temp_max, humidade, status} = state;

    function handleSubmit (event) {
        event.preventDefault();
        Update_city(state, idTarget);
    }

    return (
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
                            Id: 
                            <input  type='number' name='id' value={id} onChange={onChange} />
                        </label>
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
                            <input type="submit" value="Enviar" className="btn btn-success"/>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </form>
    );
};

export default FormUpdate;