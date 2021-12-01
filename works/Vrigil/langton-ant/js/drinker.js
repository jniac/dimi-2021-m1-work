import { canvas, clampPosition, getPixel, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

let x = 20
let y = 20
let orientation = RIGHT

let colorIndex = 0
const getColor = () => {
  const colors = ['#3484DB', '#E57ABD', '#DEDEDE','#E57ABD','#3484DB']
  const color = colors[colorIndex]
  colorIndex = colorIndex + 1
  if (colorIndex >= colors.length) {
    colorIndex = 0
  }
  return color
}



const setRandomPosition = () => {
  x = Math.floor(Math.random() * canvas.width)
  y = Math.floor(Math.random() * canvas.height)
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
}


const move = () => {
  
  const color = getColor()
  setPixel(x, y, color)
  orientation = Math.floor(Math.random() * 4)
  moveForward()
  const p = clampPosition(x, y)
  x = p.x
  y = p.y
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

