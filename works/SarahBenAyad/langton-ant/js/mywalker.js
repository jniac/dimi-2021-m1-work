import { clampPosition, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

const getRandomColor = () => {
  if (Math.random() < 0.25) {
    return '#3A59BC'
  }
  if (Math.random() < 0.5) {
    return '#953ABC'
  }
  return '#EA7537'
}
let x = 20
let y = 20
let orientation = RIGHT
let color = getRandomColor()

const setPosition = (positionX, positionY) => {
  x = positionX
  y = positionY
}

const moveForward = () => {
  if (orientation === RIGHT) {
    x = x + 1
  } else if (orientation === BOTTOM) {
    y = y + 1
  } else if (orientation === LEFT) {
    x = x - 1
  } else if (orientation === UP) {
    y = y - 1
  }

  const p = clampPosition(x, y)
  x = p.x
  y = p.y
}

const move = () => {
  setPixel(x, y, color)
  color = getRandomColor()

  const shouldChange = Math.random() < 0.1
  if (shouldChange) {
   // color = getRandomColor()
    orientation = Math.floor(Math.random() * 4)
  }

  moveForward()
}

export {
  x, y,
  setPosition,
  move,
}