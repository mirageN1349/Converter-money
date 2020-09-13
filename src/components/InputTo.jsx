import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConvertData } from '../redux/actions/converter'
import Ticket from './Ticket'

function InputToInner() {
  const dispatch = useDispatch()

  const [list, setList] = React.useState(false)
  const [input, setInput] = React.useState({
    valueTo: '',
    tickerTo: '',
  })

  const { listMoney, result } = useSelector(({ listMoney, converter }) => ({
    listMoney: listMoney.listMoney,
    result: converter.result,
  }))

  const renderList = e => {
    e.persist()
    if (e.target.name === 'tickerTo') {
      e.target.value ? setList(true) : setList(false)
    }

    dispatch(setConvertData(e.target.name, e.target.value))

    setInput(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <div className="converter-block">
      <input
        name="valueTo"
        onChange={renderList}
        value={result}
        placeholder="0"
        type="text"
        disabled
      />
      <input
        placeholder={'BNBMAINNET'}
        value={input.tickerTo}
        onChange={renderList}
        onClick={e => {
          e.target.setAttribute('disabled', true)
          setList(!list)
        }}
        type="text"
        name="tickerTo"
      />

      <div className={list ? 'converter-list' : 'converter-list none'}>
        {listMoney.map((ticket, index) => (
          <Ticket
            key={`${ticket.ticker}_${index}`}
            ticket={ticket}
            setInput={setInput}
            type={'to'}
            setList={setList}
          />
        ))}
      </div>
    </div>
  )
}

const InputTo = React.memo(InputToInner)

export default InputTo
