import jumpTo from 'jump.js'

const defaultOptions = {
  duration: 500,
  offset: 0,
}

const scrollTo = (target, options = {}) => {
  return jumpTo(target, Object.assign({}, defaultOptions, options))
}

const listener = (target, prevent) => function _listener(e) {
  const elTarget = document.querySelector(target)

  if (!elTarget) return e.currentTarget.removeEventListener('click', _listener)
  if (prevent && elTarget) e.preventDefault()

  scrollTo(target)
}

export default {
  bind: (el, { modifiers: { prevent } }) => {
    const target = el.dataset.scrollTarget

    if (target) {
      el.setAttribute('data-current-target', target)
      el.addEventListener('click', listener(target, prevent))
    }
  },

  update: (el, { modifiers: { prevent }}) => {
    const target = el.dataset.scrollTarget
    const currentTarget = el.dataset.currentTarget

    if (target === currentTarget) return

    if (target) {
      el.setAttribute('data-current-target', target)
      el.addEventListener('click', listener(target, prevent))
    }
  }
}
