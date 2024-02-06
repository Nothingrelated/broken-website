import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ERSG',
    lpAddresses: {
      369: '0x3EE45593614D8A7Bed8D89cA5B4c39BA3f29C5a5',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ERSG-PLS LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'PIANO-BUSD LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'PIANO-CAKE LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'PIANO-ADA LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'PIANO-DOT LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 11,
    lpSymbol: 'DOT-ETH LP',
    lpAddresses: {
      369: '0x574B25664508A1CAbd6f1aF3EB6386EBDe506942',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },


]

export default farms
