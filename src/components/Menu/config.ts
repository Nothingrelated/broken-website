import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/',
      },
      {
        label: 'Liquidity',
        href: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/liquidity',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      
      {
        label: 'Docs',
        href: '',
      },
      {
        label: 'Chart',
        href: 'https://dexscreener.com/pulsechain/0x80a2ff0e7768af877fb4e9d57f27cfc4a0865ddc',
      },
      {
        label: 'Audit',
        href: '',
      },
    ],
  },
  
]

export default config
