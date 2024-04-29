import { canAccessToNewsletter } from '@app/helpers/newsletters'

import { Newsletter, getNewsletters } from '@app/services/newsletters'
import { getUser } from '@app/services/user'

import Card from '@components/Card'

import type { SortedNewsletters } from './home.types'

const Page = async () => {
  const { data: newslettersData, error: newsletterError } =
    await getNewsletters()
  const { data: user, error: userError } = await getUser()

  if (!!newsletterError || !!userError) {
    return <h1>Error</h1>
  }

  if (!user || !newslettersData?.length) {
    return <h1>Loading...</h1>
  }

  const sortedNewsletters: SortedNewsletters | undefined =
    newslettersData?.reduce(
      (sorted: SortedNewsletters, current: Newsletter) => {
        sorted[current.site] = sorted[current.site] || []
        sorted[current.site].push(current)
        return sorted
      },
      {} as SortedNewsletters,
    )

  return (
    <>
      <header className="rounded-md bg-zinc-100 max-w-6xl m-auto mt-0 md:mt-4 mb-8 p-4">
        <h1 className="typography-h1 mt-4 mb-4 text-left md:text-center">
          Newsletters
        </h1>
        <p className="typography-body text-left md:text-center">
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d’intérêt et gérer plus facilement
          l’inscription à vos newsletters.{' '}
        </p>
      </header>
      <main className="ml-auto mr-auto max-w-6xl">
        {Object.entries(sortedNewsletters).map(([site, newsletters]) => (
          <div className="p-4" key={site}>
            <h2 className="typography-h2 mb-2">{site}</h2>
            <section className="md:grid grid-cols-3 gap-4">
              {newsletters.map(({ id, image, description, subscriptions }) => {
                const hasRights = canAccessToNewsletter(
                  subscriptions,
                  user.subscriptions,
                )
                const buttonLabel = hasRights ? 'S’inscrire' : 'S’abonner'

                return (
                  <Card
                    key={id}
                    image={image}
                    description={description}
                    hasRights={hasRights}
                    buttonLabel={buttonLabel}
                  />
                )
              })}
            </section>
          </div>
        ))}
      </main>
    </>
  )
}

export default Page
