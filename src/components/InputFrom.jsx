import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConvertData } from '../redux/actions/converter'
import Ticket from './Ticket'

function InputFromInner() {
  const dispatch = useDispatch()

  const [list, setList] = React.useState(false)
  const [input, setInput] = React.useState({
    valueFrom: '',
    tickerFrom: '',
  })

  const { listMoney, valueFrom } = useSelector(({ listMoney, converter }) => ({
    listMoney: listMoney.listMoney,
    valueFrom: converter.valueFrom,
  }))

  const renderList = e => {
    e.persist()
    if (e.target.name === 'tickerFrom') {
      e.target.value ? setList(true) : setList(false)
    }

    setInput(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value.toUpperCase(),
      }
    })
    dispatch(setConvertData(e.target.name, e.target.value))
  }

  return (
    <div className="converter-block">
      <input
        name="valueFrom"
        onChange={renderList}
        value={valueFrom}
        placeholder="0"
        type="text"
      />
      <input
        placeholder={'BTC'}
        value={input.tickerFrom}
        onChange={renderList}
        onClick={() => {
          setList(!list)
        }}
        type="text"
        name="tickerFrom"
      />

      <div className={list ? 'converter-list' : 'converter-list none'}>
        {listMoney.map((ticket, index) => (
          <Ticket
            key={`${ticket.ticket}_${index}`}
            ticket={ticket}
            setInput={setInput}
            type={'from'}
            setList={setList}
          />
        ))}
      </div>
    </div>
  )
}

const InputFrom = React.memo(InputFromInner)

export default InputFrom
