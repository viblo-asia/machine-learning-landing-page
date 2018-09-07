export const convertFromObject = obj => {
  const formData = new FormData()

  Object.keys(obj).forEach((key) => {
    formData.set(key, obj[key])
  })

  return formData
}
