import * as React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import NonPublicSection from 'docs/src/components/ComponentDoc/NonPublicSection'

const Performance = () => (
  <NonPublicSection title="Performance">
    <ComponentExample
      title="Default"
      description="A default test."
      examplePath="components/Button/Performance/Button.perf"
    />
  </NonPublicSection>
)

export default Performance
