import * as React from 'react'
import * as _ from 'lodash'
import renderComponent, { RenderResultConfig } from './renderComponent'
import { AccessibilityActionHandlers } from './accessibility/types'
import { FocusZone } from './accessibility/FocusZone'
import { isBrowser } from 'src/lib'

// TODO @Bugaa92: deprecated by createComponent.tsx
class UIComponent<P, S = {}> extends React.Component<P, S> {
  private readonly childClass = this.constructor as typeof UIComponent
  static defaultProps: { [key: string]: any }
  static displayName: string
  static className: string

  static propTypes: any

  /** Array of props to exclude from list of handled ones. */
  static unhandledProps: string[] = []

  private static _handledPropsCache: string[] = undefined
  static get handledProps() {
    if (!this._handledPropsCache) {
      this._handledPropsCache = _.difference(_.keys(this.propTypes), this.unhandledProps).sort()
    }

    return this._handledPropsCache
  }

  protected actionHandlers: AccessibilityActionHandlers
  protected focusZone: FocusZone

  constructor(props, context) {
    super(props, context)
    if (process.env.NODE_ENV !== 'production') {
      const child = this.constructor
      const childName = child.name

      if (typeof this.renderComponent !== 'function') {
        throw new Error(`${childName} extending UIComponent is missing a renderComponent() method.`)
      }
    }

    if (isBrowser()) {
      window.componentCount.TOTAL++
      window.componentCount[this.childClass.displayName] =
        (window.componentCount[this.childClass.displayName] || 0) + 1
    }

    this.renderComponent = this.renderComponent.bind(this)
  }

  renderComponent(config: RenderResultConfig<P>): React.ReactNode {
    throw new Error('renderComponent is not implemented.')
  }

  render() {
    return renderComponent({
      className: this.childClass.className,
      defaultProps: this.childClass.defaultProps,
      displayName: this.childClass.displayName,
      handledProps: this.childClass.handledProps,
      props: this.props,
      state: this.state,
      actionHandlers: this.actionHandlers,
      focusZoneRef: this.setFocusZoneRef,
      render: this.renderComponent,
    })
  }

  private setFocusZoneRef = (focusZone: FocusZone): void => {
    this.focusZone = focusZone
  }
}

export default UIComponent
