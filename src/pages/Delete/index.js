import React from 'react';
import Delete_city from '../../services/delete_city';


function FormDelete () {

    const id = '';
    const [state, dispatch] = useReducer (reducer, id);
    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value})
    }

    const {nome, temp, temp_min, temp_max, humidade, status} = state;

    function handleSubmit (event) {
        event.preventDefault();
        Delete_city(id);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>NOME: 
                <input  type='text' name='nome' value={nome} onChange={onChange} />
            </label> <br/>
            <input type="submit" value="Enviar" className="btn btn-success"/>
        </form>
    );
};

export default FormDelete;