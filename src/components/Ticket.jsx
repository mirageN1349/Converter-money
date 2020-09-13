import React from 'react'
import { useDispatch } from 'react-redux'
import { minConvert } from '../api/serviceApi'
import { setConvertData } from '../redux/actions/converter'
import useHttp from '../hooks/http.hook'
function Ticket({ ticket, setInput, type, setList }) {
  const { request } = useHttp()
  const dispatch = useDispatch()
  let stop = false
  const setName = async e => {
    const value = e.target.innerText
    const key = type === 'from' ? 'tickerFrom' : 'tickerTo'

    dispatch(setConvertData(key, value))
    setList(false)

    const converter = window.store.getState().converter

    if (converter?.tickerTo === converter?.tickerFrom) {
      dispatch(setConvertData('error', true))
      dispatch(setConvertData('result', '-'))
      stop = true
    } else if (converter?.tickerFrom === converter?.tickerTo) {
      dispatch(setConvertData('error', true))
      dispatch(setConvertData('result', '-'))
      stop = true
    } else {
      stop = false
      dispatch(setConvertData('result', 0))
    }

    console.log('from', converter?.tickerFrom, 'to', converter?.tickerTo)

    setInput(prev => {
      return {
        ...prev,
        [key]: value,
      }
    })

    if (converter?.tickerFrom && converter?.tickerTo) {
      if (stop === true) {
        return
      }
      dispatch(setConvertData('error', false))
      dispatch(setConvertData('loading', true))
      const min = await minConvert(
        request,
        converter?.tickerFrom,
        converter?.tickerTo
      )

      dispatch(setConvertData('minConvert', min?.minAmount))
      if (!converter?.valueFrom) {
        dispatch(setConvertData('valueFrom', min?.minAmount))
      }

      dispatch(setConvertData('loading', false))
    }
  }

  return (
    <div onClick={setName} className="converter-ticket">
      {ticket?.ticker.toUpperCase()}
    </div>
  )
}
export default Ticket
