export default {
  bind: (el) => {
    const originalSrc = el.dataset.originalSrc

    if (originalSrc) {
      const image = new Image()
      image.src = originalSrc
      image.onload = () => {
        el.setAttribute('src', originalSrc)
        el.classList.add('progressive-loading--done')
      }
    }
  }
}
