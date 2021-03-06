import * as customPropTypes from '@stardust-ui/react-proptypes'
import * as PropTypes from 'prop-types'

export interface CreateCommonConfig {
  accessibility?: boolean
  animated?: boolean
  children?: boolean | 'node' | 'element'
  as?: boolean
  className?: boolean
  color?: boolean | 'simple' | 'complex'
  content?: boolean | 'node' | 'shorthand'
  styled?: boolean
}

const colorPropType = PropTypes.oneOfType([
  PropTypes.oneOf([
    'primary',
    'secondary',
    'blue',
    'green',
    'grey',
    'orange',
    'pink',
    'purple',
    'teal',
    'red',
    'yellow',
  ]),
  PropTypes.string,
])

export const complexColorPropType = PropTypes.oneOfType([
  PropTypes.shape({
    foreground: colorPropType,
    background: colorPropType,
    border: colorPropType,
    shadow: colorPropType,
  }),
  colorPropType,
])

export const createCommon = (config: CreateCommonConfig = {}) => {
  const {
    accessibility = true,
    animated = true,
    as = true,
    children = 'node',
    className = true,
    color = false,
    content = 'node',
    styled = true,
  } = config
  return {
    ...(accessibility && {
      accessibility: customPropTypes.accessibility,
    }),
    ...(animated && {
      animation: customPropTypes.animation,
    }),
    ...(as && {
      as: customPropTypes.as,
    }),
    ...(children && {
      children: children === 'element' ? PropTypes.element : PropTypes.node,
    }),
    ...(className && {
      className: PropTypes.string,
    }),
    ...(color && {
      color: color === true || color === 'simple' ? colorPropType : complexColorPropType,
    }),
    ...(content && {
      content:
        content === 'shorthand' ? customPropTypes.itemShorthand : customPropTypes.nodeContent,
    }),
    ...(styled && {
      styles: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
      variables: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    }),
  }
}
