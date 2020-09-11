import React from 'react'
import { useDispatch } from 'react-redux'
import { minConvert } from '../api/serviceApi'
import { setConvertData } from '../redux/actions/converter'
import useHttp from '../hooks/http.hook'
function Ticket({ ticket, setInput, type, setList }) {
  const { request } = useHttp()
  const dispatch = useDispatch()
  const setName = async e => {
    const key = type === 'left' ? 'tickerLeft' : 'tickerRight'
    const value = e.target.innerText

    setInput(prev => ({
      ...prev,
      [key]: value,
    }))

    if (type === 'left') {
      const min = await minConvert(request, value)
      setInput(prev => {
        console.log(prev)
        return {
          ...prev,
          valueLeft: min.minAmount,
        }
      })
    }

    dispatch(setConvertData(key, value))

    setList(false)
  }

  return (
    <div onClick={setName} className="converter-ticket">
      {ticket?.ticker.toUpperCase()}
    </div>
  )
}

export default Ticket
