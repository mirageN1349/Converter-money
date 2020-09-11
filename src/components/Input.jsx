import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConvertData } from '../redux/actions/converter'
import Ticket from './Ticket'

function Input({ type }) {
  const dispatch = useDispatch()

  const [list, setList] = React.useState(false)
  const [input, setInput] = React.useState({
    valueLeft: '',
    valueRight: '',
    tickerLeft: '',
    tickerRight: '',
  })

  const listMoney = useSelector(({ listMoney }) => listMoney.listMoney)

  const result = useSelector(state => state.converter.result)
  const renderList = e => {
    e.persist()
    if (e.target.name === 'tickerLeft' || e.target.name === 'tickerRight') {
      e.target.value ? setList(true) : setList(false)
    }
    setInput(prev => {
      console.log(e.target.name, e.target.value)
      dispatch(setConvertData(e.target.name, e.target.value))
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <div className="converter-block">
      <input
        name={type === 'left' ? 'valueLeft' : 'valueRight'}
        onChange={renderList}
        value={type === 'right' ? result : input.valueLeft}
        placeholder="0"
        type="text"
      />
      <input
        placeholder={type === 'left' ? 'BTC' : 'BNBMAINNET'}
        value={type === 'left' ? input.tickerLeft : input.tickerRight}
        onChange={renderList}
        onClick={() => {
          setList(!list)
        }}
        type="text"
        name={type === 'left' ? 'tickerLeft' : 'tickerRight'}
      />

      <div className={list ? 'converter-list' : 'converter-list none'}>
        {listMoney.map((ticket, index) => (
          <Ticket
            key={`${ticket.ticket}_${index}`}
            ticket={ticket}
            setInput={setInput}
            type={type}
            setList={setList}
          />
        ))}
      </div>
    </div>
  )
}

export default Input
