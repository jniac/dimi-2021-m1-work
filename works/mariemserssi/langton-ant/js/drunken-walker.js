import { clampPosition, getPixel, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

let x = 20
let y = 20
let orientation = RIGHT

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

  // limite de position (x, y) à la taille du canvas
  const p = clampPosition(x, y)
  x = p.x
  y = p.y
}

const turnRight = () => {
  orientation = orientation + 1
  if (orientation === 4) {
    orientation = 0
  }
}

const turnLeft = () => {
  orientation = orientation - 1
  if (orientation === -1) {
    orientation = 3
  }
}

const move = () => {
  
  setPixel(x, y, '#E3E19B')

  orientation = Math.floor(Math.random() * 4)
  moveForward()
}

const setPosition = (positionX, positionY) => {
  x = positionX
  y = positionY
}

export {
  x,
  y,
  orientation,
  move,
  setPosition,
}

