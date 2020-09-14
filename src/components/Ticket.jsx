import React from 'react'
import { useDispatch } from 'react-redux'
import { minConvert } from '../api/serviceApi'
import { setConvertData } from '../redux/actions/converter'
import useHttp from '../hooks/http.hook'

function TicketInner({ ticket, setInput, type, setList }) {
  const { request } = useHttp()
  const dispatch = useDispatch()

  const error = () => {
    dispatch(setConvertData('error', true))
    dispatch(setConvertData('result', '-'))
  }

  let stop = false
  const setName = async e => {
    const value = e.target.innerText
    const key = type === 'from' ? 'tickerFrom' : 'tickerTo'

    dispatch(setConvertData(key, value))
    setList(false)

    const converter = window.store.getState().converter

    if (converter?.tickerTo === converter?.tickerFrom) {
      error()
      stop = true
    } else if (converter?.tickerFrom === converter?.tickerTo) {
      error()
      stop = true
    } else {
      stop = false
      dispatch(setConvertData('result', 0))
    }

    setInput(prev => {
      return {
        ...prev,
        [key]: value,
      }
    })

    if (converter?.tickerFrom && converter?.tickerTo) {
      if (stop === true) return
      dispatch(setConvertData('error', false))
      dispatch(setConvertData('loading', true))
      const min = await minConvert(
        request,
        converter?.tickerFrom,
        converter?.tickerTo
      )

      dispatch(setConvertData('minConvert', min?.minAmount))
      if (!converter?.valueFrom || converter?.valueFrom === '0') {
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

const Ticket = React.memo(TicketInner)

export default Ticket
