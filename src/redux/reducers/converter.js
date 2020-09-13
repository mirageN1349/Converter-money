const initialState = {
  result: 0,
  minConvert: 0,
  error: false,
  loading: false,
}

const converterReducer = (state = initialState, action) => {
  const key = Object.keys(action)[1]
  const data = action[key]
  switch (action.type) {
    case 'CONVERT_DATA':
      return {
        ...state,
        [key]: data,
      }

    case 'CONVERT_RESULT':
      return {
        ...state,
        result: action.payload,
      }

    default:
      return state
  }
}

export default converterReducer
