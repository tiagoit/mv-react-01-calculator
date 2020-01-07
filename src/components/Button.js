import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const style = { backgroundColor: color };
  if (wide) style.flex = 2;
  return <div className="button" style={style}>{name}</div>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
