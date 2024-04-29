import {
  Site,
  type Newsletter,
  type Subscription,
} from '@app/services/newsletters'

import { canAccessToNewsletter } from './newsletters'
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from '@mocks/user'

describe('services/canAccessToNewsletter', () => {
  it('should return true when no subscriptions are required for a newsletter', () => {
    // Given
    const requiredSubscriptions: Subscription[] = []
    const userSubscriptions = USER_WITH_ONE_SUBSCRIPTION.subscriptions

    // Then
    expect(
      canAccessToNewsletter(requiredSubscriptions, userSubscriptions),
    ).toBe(true)
  })

  it('should return false when subscriptions are required for a newsletter and the user does not have subscriptions rights', () => {
    // Given
    const requiredSubscriptions: Subscription[] = ['RIGHT_1']
    const userSubscriptions = USER_WITHOUT_SUBSCRIPTION.subscriptions

    // Then
    expect(
      canAccessToNewsletter(requiredSubscriptions, userSubscriptions),
    ).toBe(false)
  })

  it('should return true when subscriptions are required and user has all subscriptions rights', () => {
    // Given
    const requiredSubscriptions: Subscription[] = ['RIGHT_1', 'RIGHT_2']
    const userSubscriptions = USER_WITH_MULTIPLE_SUBSCRIPTION.subscriptions

    // Then
    expect(
      canAccessToNewsletter(requiredSubscriptions, userSubscriptions),
    ).toBe(true)
  })
})
