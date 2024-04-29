export type Subscription = 'RIGHT_1' | 'RIGHT_2'

export enum Site {
  DAN = 'DAN',
  DEN = 'DEN',
  SAN = 'SAN',
  LAN = 'LAN',
}

export type Newsletter = {
  id: string
  image: string
  description: string
  title: string
  site: Site
  subscriptions: Subscription[]
}
