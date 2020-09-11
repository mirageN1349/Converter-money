import React from 'react'
import arrows from '../img/arrows.svg'
import Address from './Address'
import ButtonNext from './ButtonNext'
import Input from './Input'

function Converter() {
  return (
    <div className="converter">
      <div className="converter-blocks">
        <Input type={'left'} />
        <img src={arrows} alt="" />
        <Input type={'right'} />
      </div>

      <div className="converter-blocks">
        <Address />
        <ButtonNext />
      </div>
    </div>
  )
}

export default Converter
