import React from "react";
import {connect} from "react-redux";
import {setFilterAction} from "../store/filterActions";
import {filterSelector} from "../store/filterSelector";

export function TodoFilter({value, onChange}) {
    return <div className='filter'>
        <button className='btn-filter' disabled={value === null} onClick={() => onChange(null)}>aucun filtre</button>
        <button className='btn-filter' disabled={value === true} onClick={() => onChange(true)}>complété</button>
        <button className='btn-filter' disabled={value === false} onClick={() => onChange(false)}>à faire</button>
    </div>
}

export const TodoFilterStore = connect(
    state => ({
        value: filterSelector(state)
    }),
    dispatch => ({
        onChange: (value) => dispatch(setFilterAction(value))
    })
)(TodoFilter)
