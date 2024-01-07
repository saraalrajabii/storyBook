import React from "react";

import PropTypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
  return <button style={{ backgroundColor }} onClick={handleClick}>{label}</button>;
}

Button.prototype = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onclick: PropTypes.func,
};

export default Button;
