export const setListMoney = listMoney => {
  return {
    type: 'GET_LIST_MONEY',
    payload: listMoney,
  }
}

export const fetchListMoney = request => async dispatch => {
  const listMoney = await request(
    'https://changenow.io/api/v1/currencies?active=true',
    'GET'
  )
  dispatch(setListMoney(listMoney))
}
