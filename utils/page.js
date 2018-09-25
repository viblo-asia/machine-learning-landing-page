import { pageSEO } from './seo'

export const servicePage = (service) => ({
  title: `${service.name} service - Viblo Machine Learning`,
  meta: pageSEO({
    title: `${service.name} service - Viblo Machine Learning`,
    description: service.description,
  }),
})
