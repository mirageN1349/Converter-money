import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchConvertData, setConvertData } from '../redux/actions/converter'
import useHttp from '../hooks/http.hook'

function ButtonConvertInner({ propsButton }) {
  const { request } = useHttp()
  const dispatch = useDispatch()
  const { tickerFrom, tickerTo, valueFrom, minConvert } = propsButton

  const clickConvert = () => {
    if (!tickerFrom) {
      return
    } else if (!tickerTo) {
      return
    } else if (!valueFrom) {
      return
    } else if (valueFrom < minConvert) {
      dispatch(setConvertData('result', '-'))
      return
    } else if (tickerFrom === tickerTo || tickerTo === tickerFrom) {
      dispatch(setConvertData('result', '-'))
      dispatch(setConvertData('error', true))
      return
    }
    dispatch(
      fetchConvertData(
        tickerFrom.toLowerCase(),
        tickerTo.toLowerCase(),
        valueFrom,
        request
      )
    )
  }

  return (
    <button onClick={clickConvert} className="button-convert">
      <svg
        width="16"
        height="22"
        viewBox="0 0 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.26228 2.33243L11.3097 4.37983L0.523856 4.37983L0.524061 6.83013L11.3097 6.83013L9.2622 8.87758L10.9948 10.6101L16.0001 5.60493L10.9949 0.599853L9.26228 2.33243Z" />
        <path d="M6.73777 19.365L4.69033 17.3176L15.7312 17.3176L15.731 14.8673L4.69036 14.8673L6.73785 12.8199L5.00527 11.0873L-2.3107e-05 16.0925L5.00516 21.0976L6.73777 19.365Z" />
      </svg>
    </button>
  )
}

const ButtonConvert = React.memo(ButtonConvertInner)

export default ButtonConvert
