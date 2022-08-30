import PropTypes from 'prop-types';

const myPropTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default myPropTypes;
