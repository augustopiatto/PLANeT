import { PropTypes } from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-lg text-white font-semibold rounded-md bg-terrario min-w-[128px] p-[16px] hover:scale-105 hover:shadow-emphasis"
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
};
