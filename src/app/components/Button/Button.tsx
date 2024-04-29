import { twJoin } from 'tailwind-merge'

import type { Props } from './Button.types'

const Button = ({ children, onClick, type = 'primary' }: Props) => {
  return (
    <button
      onClick={onClick}
      className={twJoin(
        'text-secondary rounded-xl p-3 px-4 w-fit',
        type === 'primary' ? 'bg-black' : 'bg-red-700',
      )}
    >
      {children}
    </button>
  )
}

export default Button
