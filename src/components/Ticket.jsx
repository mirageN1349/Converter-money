import React from 'react'
import { useDispatch } from 'react-redux'
import { minConvert } from '../api/serviceApi'
import { setConvertData } from '../redux/actions/converter'
import useHttp from '../hooks/http.hook'
function Ticket({ ticket, setInput, type, setList }) {
  const { request } = useHttp()
  const dispatch = useDispatch()

  const setName = async e => {
    const value = e.target.innerText
    const key = type === 'from' ? 'tickerFrom' : 'tickerTo'

    dispatch(setConvertData(key, value))
    setList(false)

    const converter = window.store.getState().converter

    if (converter?.tickerTo === converter?.tickerFrom) {
      setList(false)
      return alert('Валюты должны быть разные!')
    }

    setInput(prev => {
      return {
        ...prev,
        [key]: value,
      }
    })

    if (converter?.tickerFrom && converter?.tickerTo) {
      const min = await minConvert(
        request,
        converter?.tickerFrom,
        converter?.tickerTo
      )

      dispatch(setConvertData('minConvert', min.minAmount))
      if (!converter?.valueFrom) {
        dispatch(setConvertData('valueFrom', min.minAmount))
      }
    }
  }

  return (
    <div onClick={setName} className="converter-ticket">
      {ticket?.ticker.toUpperCase()}
    </div>
  )
}
export default Ticket
