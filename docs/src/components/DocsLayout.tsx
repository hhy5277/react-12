import { Provider, themes } from '@stardust-ui/react'
import AnchorJS from 'anchor-js'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { withRouter } from 'react-router'

import { Route } from 'react-router-dom'
import Sidebar from 'docs/src/components/Sidebar/Sidebar'
import { scrollToAnchor } from 'docs/src/utils'
import { getUnhandledProps, mergeThemes } from 'src/lib'

const anchors = new AnchorJS({
  icon: '#',
})

class DocsLayout extends React.Component<any, any> {
  scrollStartTimeout: any
  pathname: any

  static propTypes = {
    component: PropTypes.func,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    render: PropTypes.func,
    sidebar: PropTypes.bool,
  }

  static handledProps = ['component', 'history', 'location', 'match', 'render', 'sidebar']

  componentDidMount() {
    this.resetPage()
  }

  componentDidUpdate() {
    this.resetPage()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollStartTimeout)
  }

  resetPage = () => {
    const { location } = this.props
    // only reset the page when changing routes
    if (this.pathname === location.pathname) return

    clearTimeout(this.scrollStartTimeout)

    scrollTo(0, 0)

    anchors.add('h2, h3, h4, h5, h6')
    anchors.remove([1, 2, 3, 4, 5, 6].map(n => `.rendered-example h${n}`).join(', '))
    anchors.remove('.no-anchor')

    this.scrollStartTimeout = setTimeout(scrollToAnchor, 500)
    this.pathname = location.pathname
  }

  renderChildren = props => {
    const { component: Children, render } = this.props

    if (render) return render()
    return (
      <>
        <Provider
          theme={mergeThemes(themes.teamsDark, {
            // adjust Teams' theme to Semantic UI's font size scheme
            componentVariables: {
              MenuDivider: {
                borderColor: '#ffffff80',
              },
              MenuItem: {
                activeBackgroundColor: 'none',
                focusedBackgroundColor: 'none',
              },
            },
          })}
        >
          <Sidebar />
        </Provider>
        <div role="main" style={{ marginLeft: 250 }}>
          <Children {...props} />
        </div>
      </>
    )
  }

  render() {
    const unhandledProps = getUnhandledProps(DocsLayout, this.props)

    return <Route {...unhandledProps} render={this.renderChildren} />
  }
}

export default withRouter(DocsLayout)
