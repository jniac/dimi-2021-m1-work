import { canvas, getPixel, setPixel } from '../../../common/canvas.js'

const RIGHT = 1
const BOTTOM = 10
const LEFT = 1
const UP = 5

let x = 20
let y = 20
let orientation = UP

const setRandomPosition = () => {
  x = Math.floor(Math.random() * canvas.width)
  y = Math.floor(Math.random() * canvas.height)
}

const moveForward = () => {
  if (orientation === UP) {
    x = x + 1
  } else if (orientation === BOTTOM) {
    y = y + 1
  } else if (orientation === RIGHT) {
    x = x - 1
  } else if (orientation === LEFT) {
    y = y - 1
  }
}

const turnLeft = () => {
  orientation = orientation + 1
  if (orientation === 2) {
    orientation = 3
  }
}

const turnUp = () => {
  orientation = orientation + 4
  if (orientation === -1) {
    orientation = 4
  }
}

const move = () => {
  
  const color = getPixel(x, y)

  if (color === 'red') {
    turnLeft()    
    setPixel(x, y, 'blue')
  } else {
    turnUp()
    setPixel(x, y, 'black')
  }
  
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
  setRandomPosition,
  setPosition,
}

