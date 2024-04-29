import { waitFor } from '@testing-library/dom'

import { API_BASE_PATH, CACHE_REVALIDATE_DELAY } from '@app/constants'
import { NEWSLETTER_ITEMS } from '@mocks/newsletters'

import { getNewsletters } from './newsletters'

describe('getNewsletters', () => {
  afterEach(jest.clearAllMocks)

  it('should retrieve newsletters liste with the correct url and data', async () => {
    // GIVEN
    const expected = {
      data: NEWSLETTER_ITEMS,
      status: 'OK',
      error: undefined,
    }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expected),
      }),
    ) as jest.Mock

    const result = await getNewsletters()

    // THEN
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_BASE_PATH}/newsletters`,
        { method: 'GET', next: { revalidate: CACHE_REVALIDATE_DELAY } },
      )
    })

    expect(result).toStrictEqual(expected)
  })
})
