import { Random } from './utils/random.js'

export const getRandomColor = () => {
  const r = Random.random()
  if (r < 0.5) {
    if (Random.chance(0.5)) {
      return '#0C3688'
    }
    return '#3A6AC6'
  }
  if (r < 0.7) {
    return '#5FA8ED'
  }
  if (r < 0.9) {
    return '#A3D5FA'
  }
  return '#ffffff'
}

export const getRandomColorIncludingWhite = (whiteProbability = .2) => {
  if (Random.chance(whiteProbability)) {
    return 'white'
  }
  return getRandomColor()
}