import { API_BASE_PATH, CACHE_REVALIDATE_DELAY } from '@app/constants'

import { BackendApiResponse, HttpMethod } from '@app/api/api.types'

import type { User } from './user.types'

export const getUser = async (): Promise<BackendApiResponse<User>> => {
  const data = await fetch(`${API_BASE_PATH}/users/me`, {
    method: HttpMethod.GET,
    next: { revalidate: CACHE_REVALIDATE_DELAY },
  })

  const response: BackendApiResponse<User> = await data.json()

  return {
    data: response?.data,
    status: response?.status,
    error: response?.error,
  }
}
