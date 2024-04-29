import type { Subscription } from '../newsletters/newsletters.types'

export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
}

export type User = {
  id: string
  firstName: string
  lastName: string
  gender: Gender
  email: string
  subscriptions: Subscription[]
}
