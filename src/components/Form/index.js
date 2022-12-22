import React from "react";
import PropTypes from 'prop-types';
import { FaCheck } from "react-icons/fa";
import './form.css';

export default function Form({ handleChange, handleSubmit, newTask }) {
    return (
        <form onSubmit={handleSubmit} action='#' className='form'>
        <input
        onChange={handleChange}
        type='text'
        value={newTask}
        />
        <button type='submit'>
        <FaCheck />
        </button>
    </form>
    );
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired,
}
