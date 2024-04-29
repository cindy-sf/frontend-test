import { render, screen } from '@testing-library/react'

import { getUser } from '@app/services/user'
import { getNewsletters } from '@app/services/newsletters'

import { NEWSLETTER_ITEMS } from '@mocks/newsletters'
import { USER_WITHOUT_SUBSCRIPTION } from '@mocks/user'

import Page from './page'

jest.mock('../services/user', () => ({
  getUser: jest.fn(),
}))

jest.mock('../services/newsletters', () => ({
  getNewsletters: jest.fn(),
}))

const getUserMock = getUser as jest.Mock
const getNewslettersMock = getNewsletters as jest.Mock

describe('<Page />', () => {
  afterEach(jest.clearAllMocks)

  it('should render a loader when the data is fetching', async () => {
    // Given
    getUserMock.mockImplementation(() =>
      Promise.resolve({
        data: {},
      }),
    )
    getNewslettersMock.mockImplementation(() =>
      Promise.resolve({
        data: [],
      }),
    )

    render(await Page())

    // Then
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render an error text when an api call error', async () => {
    // Given
    getUserMock.mockImplementation(() =>
      Promise.resolve({
        data: {},
        status: 500,
        error: 'error',
      }),
    )

    render(await Page())

    // Then
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('should render the page with newsletters', async () => {
    // Given
    getUserMock.mockImplementation(() =>
      Promise.resolve({
        data: USER_WITHOUT_SUBSCRIPTION,
        status: 200,
        error: null,
      }),
    )
    getNewslettersMock.mockImplementation(() =>
      Promise.resolve({
        data: [NEWSLETTER_ITEMS],
        status: 200,
        error: null,
      }),
    )

    render(await Page())

    // Then
    expect(await screen.findByText('Newsletters')).toBeInTheDocument()
  })
})
