export const state = () => ({
  locales: ['en-US', 'vi-VN'],
  locale: 'en-US'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
