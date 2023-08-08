import { PropTypes } from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-lg text-white font-semibold rounded-md bg-terrario min-w-[128px] p-[16px]"
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
};
