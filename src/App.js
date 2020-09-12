import React from 'react'
import { useDispatch } from 'react-redux'
import Converter from './components/Converter'
import { fetchListMoney } from './redux/actions/listMoney'
import useHttp from './hooks/http.hook'

function App() {
  const { request } = useHttp()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchListMoney(request))
  })

  return (
    <div className="container">
      <Converter />
    </div>
  )
}

export default App
