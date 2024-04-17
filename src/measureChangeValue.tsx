import React from 'react'
import { ValueChangeDisplayProps } from './measureChangeValue.model'
// import { Tooltip } from '@components/mobiusComponents/tooltip/tooltip'
import isUndefined from 'lodash/isUndefined'
import './measureChangeValue.module.css'

export function MeasureChangeValue({
  valueChangeDisplay
}: {
  valueChangeDisplay: ValueChangeDisplayProps
}) {
  const changeValuePositiveNegative = Math.sign(valueChangeDisplay.change)

  return (
    <div className='measureChangeValue'>
      <div className='bodySmallEmp'>{valueChangeDisplay.name}</div>
      <span className='measureValue h1'>
        {!isUndefined(valueChangeDisplay.value)
          ? valueChangeDisplay.value // formatterToCurrency({ value: valueChangeDisplay.value })
          : '-'}
        {!isUndefined(valueChangeDisplay.value) && (
          <span className='bodyLarge'>{valueChangeDisplay.type}</span>
        )}
        <span
          className={
            (changeValuePositiveNegative === -1
              ? 'negative'
              : changeValuePositiveNegative === 1
              ? 'positive'
              : 'noChange') +
            ' ' +
            'changeFactor bodyMed'
          }
        >
          {valueChangeDisplay.changeDisplayShow && (
            <>
              {changeValuePositiveNegative === -1 && (
                <span className='changeIndicatorDown'>&darr;</span>
              )}
              {changeValuePositiveNegative === 1 && (
                <span className='changeIndicatorUp'>&uarr;</span>
              )}
              {valueChangeDisplay.change}%
            </>
          )}
        </span>
      </span>
    </div>
  );
}
