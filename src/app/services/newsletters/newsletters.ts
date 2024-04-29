import { API_BASE_PATH, CACHE_REVALIDATE_DELAY } from '@app/constants'

import { BackendApiResponse, HttpMethod } from '@app/api/api.types'

import type { Newsletter } from './newsletters.types'

export const getNewsletters = async (): Promise<
  BackendApiResponse<Newsletter[]>
> => {
  const data = await fetch(`${API_BASE_PATH}/newsletters`, {
    method: HttpMethod.GET,
    next: { revalidate: CACHE_REVALIDATE_DELAY },
  })

  const response: BackendApiResponse<Newsletter[]> = await data.json()

  return {
    data: response?.data,
    status: response?.status,
    error: response?.error,
  }
}
