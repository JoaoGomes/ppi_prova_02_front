import React, {useReducer} from 'react';
import Delete_city from '../../services/delete_city';


const initialState = {
    id: '',
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

    const {id} = state;

    function handleSubmit (event) {
        event.preventDefault();
        Delete_city(id);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Número da cidade: 
                <input  type='number' name='id' value={id} onChange={onChange} />
            </label> <br/>
            <input type="submit" value="Enviar" className="btn btn-success"/>
        </form>
    );
};

export default FormDelete;