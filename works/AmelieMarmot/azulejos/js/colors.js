import { Random } from './utils/random.js'

export const getRandomColor = () => {
  const r = Random.random()
  if (r < 0.5) {
    if (Random.chance(0.5)) {
      return '#4a6ca8'
    }
    return '#c2c6ed'
  }
  if (r < 0.7) {
    return '#a1c3ff'
  }
  if (r < 0.9) {
    return '#a39cb8'
  }
  return '#446ba6'
}

export const getRandomColorIncludingWhite = (whiteProbability = .2) => {
  if (Random.chance(whiteProbability)) {
    return 'white'
  }
  return getRandomColor()
}
