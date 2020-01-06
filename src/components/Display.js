import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (<div>{value}</div>);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
