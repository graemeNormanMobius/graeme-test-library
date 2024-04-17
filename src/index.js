import React from 'react'
// import { ValueChangeDisplayProps } from 'measureChangeValue.model'
// import styles from './styles.module.css'
// import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

export const MeasureChangeValue = ({
  valueChangeDisplay
}: {
  valueChangeDisplay: any // ValueChangeDisplayProps
}) => {
  return (
    <div className='measureChangeValue'>
      <div className='bodySmallEmp'>
        {valueChangeDisplay.name}
        {/* {valueChangeDisplay.tooltip.display && ( */}
        {/*   <Tooltip placement="top" data="This is my test custom tooltip message." /> */}
        {/* )} */}
      </div>
      <span className='measureValue h1'>
        {valueChangeDisplay.value}
        <span className='bodyLarge'>{valueChangeDisplay.type}</span>
      </span>
    </div>
  )
}

// export const MeasureChangeValue = ({ valueChangeDisplay }) => {
// export function MeasureChangeValue({
//   valueChangeDisplay
// }: {
//   valueChangeDisplay: ValueChangeDisplayProps
// }) {
//   return (
//     <MeasureChangeValue
//       valueChangeDisplay={{
//         name: 'Overall Emissions',
//         value: 203179,
//         type: 'tCO2e',
//         tooltip: {
//           display: true,
//           value: 'Some dummy text for overall emissions tooltip'
//         },
//         change: 1,
//         changeDisplayShow: false
//       }}
//     />
//   )
// }
