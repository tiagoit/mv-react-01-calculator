import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <div className="button" style={{ backgroundColor: color, flex: wide }}>{name}</div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.number,
};

Button.defaultProps = {
  color: 'orange',
  wide: 1,
};

export default Button;
