import { waitFor } from '@testing-library/dom'

import { API_BASE_PATH, CACHE_REVALIDATE_DELAY } from '@app/constants'
import { USER_WITH_ONE_SUBSCRIPTION } from '@mocks/user'

import { getUser } from './user'

describe('getUser', () => {
  afterEach(jest.clearAllMocks)

  it('should retrieve the user with the correct url and data', async () => {
    // GIVEN
    const expected = {
      data: USER_WITH_ONE_SUBSCRIPTION,
      status: 'OK',
      error: undefined,
    }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expected),
      }),
    ) as jest.Mock

    const result = await getUser()

    // THEN
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(`${API_BASE_PATH}/users/me`, {
        method: 'GET',
        next: { revalidate: CACHE_REVALIDATE_DELAY },
      })
    })

    expect(result).toStrictEqual(expected)
  })
})
