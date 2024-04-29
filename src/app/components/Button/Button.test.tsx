import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('<Button />', () => {
  it('should render the component properly', () => {
    // Given
    render(<Button>Label</Button>)

    // Then
    expect(screen.getByRole('button', { name: 'Label' })).toBeInTheDocument()
  })
})
