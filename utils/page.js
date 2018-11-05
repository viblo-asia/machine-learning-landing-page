import { pageSEO } from './seo'

export const servicePage = (service) => ({
  title: `${service.name} service - Viblo Machine Learning`,
  meta: pageSEO({
    title: `${service.name} service - Viblo Machine Learning`,
    description: service.description,
  }),
})

export const url = (newPath, newLocale) => {
  if (typeof newPath === 'string') {
    return newPath.startsWith(`/${newLocale}/`) ? newPath : `/${newLocale}${newPath}`
  }

  const { path, locale } = newPath
  const next = path.replace(locale, newLocale)

  return url(next, newLocale)
}

export const serviceURL = (key, locale) => {
  const path = `/${key.replace(/\_/g, '-')}`
  const pathByLocale = url(path, locale)

  return pathByLocale
}
