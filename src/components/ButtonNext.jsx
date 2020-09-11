import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchConvertData } from '../redux/actions/converter'
import useHttp from '../hooks/http.hook'
function ButtonNext() {
  const { request } = useHttp()
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  return (
    <button
      onClick={() => {
        console.log(state.converter)
        dispatch(
          fetchConvertData(
            state.converter.tickerLeft.toLowerCase(),
            state.converter.tickerRight.toLowerCase(),
            state.converter.valueLeft.toLowerCase(),
            request
          )
        )
      }}
      className="converter-next"
    >
      NEXT
    </button>
  )
}

export default ButtonNext
