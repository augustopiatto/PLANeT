import { PropTypes } from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-base radius bg-lime-300 min-w-[128px] p-[16px]"
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
};
