import React from 'react'
import { useDispatch } from 'react-redux'
import { setConvertData } from '../redux/actions/converter'
import Ticket from './Ticket'

function InputFromInner({ propsInput }) {
  const dispatch = useDispatch()
  const [list, setList] = React.useState(false)
  const [input, setInput] = React.useState({
    valueFrom: '',
    tickerFrom: '',
  })

  const {
    listMoney,
    valueFrom,
    minConvert,
    tickerTo,
    tickerFrom,
    result,
    error,
  } = propsInput

  const errors = () => {
    if (result === '-' && !error) {
      return (
        <span className="error-min">
          {'Минимальная сумма конвертации: '}
          <span className="error-min__value">
            {minConvert || 'пара не активна'}
          </span>
        </span>
      )
    } else if (error && result === '-') {
      return <span className="error-min">Выберите разные валюты</span>
    } else if (!tickerFrom) {
      return <span className="error-min">Выберите конвертируемую валюту</span>
    } else if (!tickerTo) {
      return <span className="error-min">Выберите итоговую валюту</span>
    } else if (!valueFrom || valueFrom === '0') {
      return <span className="error-min">Введите сумму конвертации</span>
    } else {
      return <span className="success">Нажмите на кнопку конвертации</span>
    }
  }

  React.useEffect(() => {
    if (valueFrom !== input.valueFrom) {
      setInput({
        ...input,
        valueFrom: valueFrom,
      })
    }
  }, [valueFrom, input])

  const renderList = e => {
    e.persist()
    if (e.target.name === 'tickerFrom') {
      e.target.value ? setList(true) : setList(false)
    }
    const value = e.target.value.replace(/[^\d., '']/g, '').toUpperCase()
    setInput(prev => {
      return {
        ...prev,
        [e.target.name]: value,
      }
    })
    dispatch(setConvertData(e.target.name, value))
  }

  return (
    <div className="converter-block">
      <input
        name="valueFrom"
        className="converter-input"
        onChange={renderList}
        value={input.valueFrom}
        placeholder="0"
        type="text"
      />

      <input
        placeholder={'BTC'}
        value={input.tickerFrom}
        onChange={renderList}
        onClick={e => {
          e.target.setAttribute('disabled', true)
          setList(!list)
        }}
        type="text"
        name="tickerFrom"
      />
      {errors()}

      <div className={list ? 'converter-list' : 'converter-list none'}>
        {listMoney.map((ticket, index) => (
          <Ticket
            key={`${ticket.ticker}_${index}`}
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
