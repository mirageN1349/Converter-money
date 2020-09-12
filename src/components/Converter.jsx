import React from 'react'

import Address from './Address'
import ButtonNext from './ButtonNext'
import ButtonConvert from './ButtonConvert'
import InputFrom from './InputFrom'
import InputTo from './InputTo'

function Converter() {
  return (
    <div className="converter">
      <div className="converter-blocks">
        <InputFrom />
        <ButtonConvert />
        <InputTo />
      </div>

      <div className="converter-blocks">
        <Address />
        <ButtonNext />
      </div>
    </div>
  )
}

export default Converter
