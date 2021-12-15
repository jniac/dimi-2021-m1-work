import { Random } from './utils/random.js'

export const getRandomColor = () => {
  const r = Random.random()
  if (r < 0.5) {
    if (Random.chance(0.5)) {
      return '#B500C8'
    }
    return '#00C81F'
  }
  if (r < 0.7) {
    return '#180DAE'
  }
  if (r < 0.9) {
    return '#F22323'
  }
  return '#EBEB17'
}

export const getRandomColorIncludingWhite = (whiteProbability = .2) => {
  if (Random.chance(whiteProbability)) {
    return 'white'
  }
  return getRandomColor()
}
