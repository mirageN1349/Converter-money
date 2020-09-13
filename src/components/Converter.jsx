import React from 'react'

import Address from './Address'
import ButtonNext from './ButtonNext'
import ButtonConvert from './ButtonConvert'
import InputFrom from './InputFrom'
import InputTo from './InputTo'
import Preloader from './Preloader'
import { useSelector } from 'react-redux'
function Converter() {
  const { loading } = useSelector(({ converter }) => ({
    loading: converter.loading,
  }))
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
      <div className="converter-preloader">{loading ? <Preloader /> : ''}</div>
    </div>
  )
}

export default Converter
