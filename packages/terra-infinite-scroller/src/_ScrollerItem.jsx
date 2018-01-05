import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ScrollerItem.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  children: PropTypes.element,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isRenderable: PropTypes.bool,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  scrollProps: PropTypes.object,
};

const defaultProps = {
  children: [],
  isRenderable: false,
  scrollProps: {},
};

class ScrollerItem extends React.Component {
  render() {
    const {
      children,
      isRenderable,
      refCallback,
      scrollProps,
      ...customProps
    } = this.props;

    if (children.props.isMountable || children.props.isPersistent) {
      return React.cloneElement(children, { refCallback, isRenderable, scrollProps });
    }

    if (!isRenderable) {
      return null;
    }
    const scrollerItemClassNames = cx([
      'scroller-item',
      customProps.className,
    ]);

    return (
      <div {...customProps} {...scrollProps} className={scrollerItemClassNames} ref={refCallback}>
        {children}
      </div>
    );
  }
}


ScrollerItem.propTypes = propTypes;
ScrollerItem.defaultProps = defaultProps;

export default ScrollerItem;