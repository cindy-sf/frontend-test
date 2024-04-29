import type { Newsletter, Site } from '@app/services/newsletters'

export type SortedNewsletters = Record<Site, Newsletter[]>
