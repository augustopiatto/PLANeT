import { PropTypes } from "prop-types";

const Input = ({ label, name, type, value, onChange, error, onBlur }) => {
  return (
    <div className="grid grid-rows-2">
      <label htmlFor={name} className="text-base leading-9 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="text-base border border-slate-300 px-[4px] py-[6px] rounded-md block w-full"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-sm text-red-500 font-semibold">{error}</p>}
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  // value: PropTypes.string,
  // onChange: PropTypes.string,
  error: PropTypes.string,
  // onBlur: PropTypes.string,
};
