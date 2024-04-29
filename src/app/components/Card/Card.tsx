import Image from 'next/image'

import Button from '../Button'

import type { Props } from './Card.types'

const Card = ({ image, hasRights, description, buttonLabel }: Props) => (
  <article className="mb-10 flex flex-col align-center">
    <Image
      src={image}
      width={400}
      height={200}
      className="rounded-lg mb-2"
      alt=""
      priority
    />
    <p className="mb-2 max-w-60">{description}</p>
    <Button type={hasRights ? 'primary' : 'secondary'}>{buttonLabel}</Button>
  </article>
)

export default Card
