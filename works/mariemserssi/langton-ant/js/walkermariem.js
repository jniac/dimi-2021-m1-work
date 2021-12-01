import { clampPosition, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

const getRandomColor = () => {
  if (Math.random() < 0.25) {
    return 'transparent'
  }
  if (Math.random() < 0.5) {
    return '#E3E19B'
  }
  return '#81b7d2'
}