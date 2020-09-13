import { setConvertData } from './converter'

export const setListMoney = listMoney => {
  return {
    type: 'GET_LIST_MONEY',
    payload: listMoney,
  }
}

export const fetchListMoney = request => async dispatch => {
  dispatch(setConvertData('loading', true))
  const listMoney = await request(
    'https://changenow.io/api/v1/currencies?active=true',
    'GET'
  )
  dispatch(setListMoney(listMoney))
  dispatch(setConvertData('loading', false))
}
