import PropTypes from 'prop-types';

export const variantType = PropTypes.oneOf(['primary', 'secondary', 'error', 'success']);

export const sizeType = PropTypes.oneOf(['small', 'medium', 'large']);

export const actionType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  active: PropTypes.bool
});

export default PropTypes;
