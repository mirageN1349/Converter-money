import config from '../config/config.json'

export const converter = async (from, to, sum, request) => {
  const data = await request(
    `https://changenow.io/api/v1/exchange-amount/${sum}/${from}_${to}/?api_key=${config.api_key}`
  )

  return data
}

export const minConvert = async (request, from, to = 'BNBMAINNET') => {
  const data = await request(
    `https://changenow.io/api/v1/min-amount/${from}_${to}`
  )

  return data
}
