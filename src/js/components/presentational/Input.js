import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange }) => (
    <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" htmlFor={ label }>
            { text }
        </label>
        <input
        type={type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        value={value}
        onChange={handleChange}
        required
        ></input>
    </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  //value: PropTypes.string.isRequired,
  //handleChange: PropTypes.func.isRequired
};
export default Input;