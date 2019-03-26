import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M20.5 8H15c-.4 0-.777.156-1.083.463l-3.478 3.968c-.283.283-.439.66-.439 1.06V22.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm-6.514 1.9V13h-2.718l2.718-3.1zM21 22.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V14h3.986V9.003c.005 0 .01-.003.014-.003h5.5a.5.5 0 0 1 .5.5v13zM14.011 16l-1.261 3.936h.742l.338-1.116h1.25l.356 1.116h.77L14.929 16h-.917zm-.064 2.277l.304-.969c.07-.234.128-.508.187-.736h.011c.059.228.123.497.199.736l.31.97h-1.01zm3.913-1.25c-.911 0-1.39.742-1.39 1.53 0 .87.543 1.443 1.465 1.443.41 0 .748-.082.993-.181l-.105-.496a2.136 2.136 0 0 1-.788.128c-.456 0-.859-.222-.876-.736h1.903c.012-.064.024-.17.024-.303 0-.625-.298-1.384-1.226-1.384zm-.701 1.186c.029-.292.216-.695.66-.695.479 0 .595.432.59.695h-1.25z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
