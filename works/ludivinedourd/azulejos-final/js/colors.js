import { Random } from './utils/random.js'

export const getRandomColor = () => {
  const r = Random.random()
  if (r < 0.5) {
    if (Random.chance(0.5)) {
      return '#ead2ac'
    }
    return '#e6b89c'
  }
  if (r < 0.7) {
    return '#fe938c'
  }
  if (r < 0.9) {
    return '#9cafb7'
  }
  return '#4281a4'
}

export const getRandomColorIncludingWhite = (whiteProbability = .2) => {
  if (Random.chance(whiteProbability)) {
    return 'white'
  }
  return getRandomColor()
}
