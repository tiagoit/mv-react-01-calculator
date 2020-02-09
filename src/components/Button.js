import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { name, clickHandler } = this.props;
    clickHandler(name);
  }

  render() {
    const { name, color, wide } = this.props;
    const style = { backgroundColor: color };
    if (wide) style.width = 136;

    return (
      <button
        type="button"
        style={style}
        onClick={this.handleClick}
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
