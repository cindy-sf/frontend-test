import { render, screen } from '@testing-library/react'

import Card from './Card'

describe('<Card />', () => {
  it('should render the component properly', () => {
    // Given
    const props = {
      buttonLabel: 'Label',
      description: 'description',
      image: 'https://image.png',
      hasRights: true,
    }

    render(<Card {...props} />)

    // Then
    expect(
      screen.getByRole('button', { name: props.buttonLabel }),
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
  })
})
