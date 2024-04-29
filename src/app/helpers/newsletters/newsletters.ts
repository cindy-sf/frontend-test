import type { Subscription } from '@app/services/newsletters'

export const canAccessToNewsletter = (
  requiredSubscriptions?: Subscription[],
  userSubscriptions?: Subscription[],
): boolean => {
  if (!requiredSubscriptions?.length) {
    return true
  }

  if (!userSubscriptions?.length) {
    return false
  }

  return !!requiredSubscriptions.every((subscription) =>
    userSubscriptions.includes(subscription),
  )
}
