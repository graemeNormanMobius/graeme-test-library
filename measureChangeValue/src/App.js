import React from 'react'

import { MeasureChangeValue } from 'test-measure-change-component'
import 'test-measure-change-component/dist/index.css'

// import { MeasureChangeValue } from 'test-measure-change-component'
// import 'test-measure-change-component/dist/index.css'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return  <MeasureChangeValue
    valueChangeDisplay={{
      name: 'Overall Emissions',
      value: 203179,
      type: 'tCO2e',
      tooltip: {
        display: true,
        value: 'Some dummy text for overall emissions tooltip'
      },
      change: 1,
      changeDisplayShow: false
    }}
  />

  // return (
      // <ExampleComponent text="Create React Library Example 😄" />
      // <br /><br />
      // <MeasureChangeValue
      //   valueChangeDisplay={{
      //     name: 'Overall Emissions',
      //     value: 203179,
      //     type: 'tCO2e',
      //     tooltip: {
      //       display: true,
      //       value: 'Some dummy text for overall emissions tooltip'
      //     },
      //     change: 1,
      //     changeDisplayShow: false
      //   }}
      // />
    // )
  // return <MeasureChangeValue
  //   valueChangeDisplay={{
  //     name: 'Overall Emissions',
  //     value: 203179,
  //     type: 'tCO2e',
  //     tooltip: {
  //       display: true,
  //       value: 'Some dummy text for overall emissions tooltip'
  //     },
  //     change: 1,
  //     changeDisplayShow: false
  //   }}
  // />
}

export default App
