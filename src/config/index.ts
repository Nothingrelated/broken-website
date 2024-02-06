import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000000,
  DECIMAL_PLACES: 18,
})

export const BSC_BLOCK_TIME = 3
export const CAKE_PER_BLOCK = new BigNumber(10)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://mozartfinance.io/'
export const BASE_EXCHANGE_URL = 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0x3F34B61FC145bdeC63c75f17deaDBD89e5E7c8af'
export const BASE_ADD_LIQUIDITY_URL = `https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0x3F34B61FC145bdeC63c75f17deaDBD89e5E7c8af/PLS`
export const BASE_LIQUIDITY_POOL_URL = `https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/liquidity`
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
