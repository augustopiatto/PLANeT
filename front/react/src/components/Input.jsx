import { PropTypes } from "prop-types";

const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="grid grid-rows-2">
      <label htmlFor={name} className="text-base leading-9 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="text-base border-2 border-scale-100 px-[4px] py-[6px] rounded-md block w-full focus:scale-105 focus:outline-none focus:border-plant focus:shadow-emphasis"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className="h-[14px] text-sm text-red-500 font-semibold">
        {error && error}
      </p>
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  // value: PropTypes.string,
  // onChange: PropTypes.string,
  error: PropTypes.string,
  // onBlur: PropTypes.string,
};
