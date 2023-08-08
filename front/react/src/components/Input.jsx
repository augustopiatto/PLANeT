import { PropTypes } from "prop-types";

const Input = ({ label, name, type, value, onChange, error, onBlur }) => {
  return (
    <div className="">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className=""
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="">{error}</p>}
    </div>
  );
};

export default Input;

Input.propTypes = {
  // label: PropTypes.string,
  // name: PropTypes.string,
  // type: PropTypes.string,
  // value: PropTypes.string,
  // onChange: PropTypes.string,
  // error: PropTypes.string,
  // onBlur: PropTypes.string,
};
