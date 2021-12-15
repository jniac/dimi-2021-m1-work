import { Random } from './utils/random.js'

export const getRandomColor = () => {
  const r = Random.random()
  if (r < 0.5) {
    if (Random.chance(0.5)) {
      return '#8f5349'
    }
    return 'tomato'
  }
  if (r < 0.7) {
    return '#d90045'
  }
  if (r < 0.9) {
    return '#6994bf'
  }
  return '#abded5'
}

export const getRandomColorIncludingWhite = (whiteProbability = .2) => {
  if (Random.chance(whiteProbability)) {
    return 'white'
  }
  return getRandomColor()
}
