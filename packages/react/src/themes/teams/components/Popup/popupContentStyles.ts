import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'
import { pxToRem } from '../../../../lib'
import { PopupContentProps } from '../../../../components/Popup/PopupContent'
import { PopupContentVariables } from './popupContentVariables'

const popupContentStyles: ComponentSlotStylesInput<PopupContentProps, PopupContentVariables> = {
  root: ({ variables }): ICSSInJSStyle => {
    const { borderColor, padding } = variables

    return {
      display: 'block',
      padding,
      border: `1px solid ${borderColor}`,
      borderRadius: pxToRem(3),
      boxShadow: `0 2px 4px 0 ${borderColor}, 0 2px 10px 0 ${borderColor}`,
    }
  },
}

export default popupContentStyles
