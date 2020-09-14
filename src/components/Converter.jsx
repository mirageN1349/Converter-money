import React from 'react'

import Address from './Address'
import ButtonNext from './ButtonNext'
import ButtonConvert from './ButtonConvert'
import InputFrom from './InputFrom'
import InputTo from './InputTo'
import Preloader from './Preloader'
import { useSelector } from 'react-redux'

function Converter() {
  const propsInput = useSelector(({ listMoney, converter }) => ({
    loading: converter.loading,
    listMoney: listMoney.listMoney,
    valueFrom: converter.valueFrom,
    minConvert: converter.minConvert,
    tickerTo: converter.tickerTo,
    tickerFrom: converter.tickerFrom,
    result: converter.result,
    error: converter.error,
  }))

  return (
    <div className="converter">
      <div className="converter-blocks">
        <InputFrom propsInput={propsInput} />
        <ButtonConvert />
        <InputTo result={propsInput.result} listMoney={propsInput.listMoney} />
      </div>

      <div className="converter-blocks">
        <Address />
        <ButtonNext />
      </div>
      <div className="converter-preloader">
        {propsInput.loading ? <Preloader /> : ''}
      </div>
    </div>
  )
}

export default Converter
