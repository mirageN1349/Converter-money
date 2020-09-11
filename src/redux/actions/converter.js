import { converter } from '../../api/serviceApi'

export const setConvertData = (key, value) => {
  return {
    type: 'CONVERT_DATA',
    [key]: value,
  }
}

export const setConvertResult = result => {
  return {
    type: 'CONVERT_RESULT',
    payload: result,
  }
}

export const fetchConvertData = (from, to, sum, request) => async dispatch => {
  const convert = await converter(from, to, sum, request)
  dispatch(setConvertResult(convert.estimatedAmount))
}
