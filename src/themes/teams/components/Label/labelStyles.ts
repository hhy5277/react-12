import { pxToRem } from '../../../../lib'
import { ICSSInJSStyle } from '../../../../../types/theme'

const labelStyles = {
  root: ({ props: { image, imagePosition, circular }, variables }): ICSSInJSStyle => ({
    padding: variables.padding,
    ...(image &&
      imagePosition === 'start' && {
        paddingLeft: variables.startPaddingLeft,
      }),
    ...(image &&
      imagePosition === 'end' && {
        paddingRight: variables.endPaddingRight,
      }),
    display: 'inline-flex',
    alignItems: 'center',
    height: variables.height,
    fontSize: pxToRem(14),
    lineHeight: variables.height,
    backgroundColor: variables.backgroundColor,
    color: variables.color,
    borderRadius: pxToRem(3),
    ...(circular && {
      borderRadius: variables.circularRadius,
    }),
    overflow: 'hidden',
  }),
  image: ({ variables }): ICSSInJSStyle => ({
    height: variables.height,
    width: variables.height,
  }),
  icon: ({ props }): ICSSInJSStyle => ({
    ...(props.icon &&
      typeof props.icon === 'object' &&
      props.icon.onClick && {
        cursor: 'pointer',
      }),
  }),
}

export default labelStyles