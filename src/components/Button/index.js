import React from 'react';
import classNames from 'classnames';
import { variantType, sizeType } from '../../propTypes';

import * as styles from './styles.scss';

export default class Button extends React.PureComponent {
  static propTypes = {
    variant: variantType,
    size: sizeType
  };

  static defaultProps = {
    variant: 'primary',
    size: 'medium'
  };

  render() {
    const { variant, size, children, className } = this.props;
    const buttonClass = classNames(className, styles.button, styles[variant], styles[size]);

    return <button className={buttonClass}>{children}</button>;
  }
}
