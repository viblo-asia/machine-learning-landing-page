export const percentFormat = (value) => {
  const number = parseFloat(value) || 0
  return Math.round(number * 100 * 1000) / 1000
}
