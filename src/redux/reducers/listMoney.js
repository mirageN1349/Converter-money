const initialState = {
  listMoney: [],
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_MONEY':
      return {
        ...state,
        listMoney: action.payload,
      }

    default:
      return state
  }
}

export default listReducer
