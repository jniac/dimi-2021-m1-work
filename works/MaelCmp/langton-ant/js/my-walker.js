import { clampPosition, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

let colorIndex = 0
const getRandomColor = () => {
  const colors = ['#c80000','#c80090','#c200c8',
                  '#8200c8','#4c00c8','#005ec8',
                  '#00bfc8','#00c889','#00c815',
                  '#86c800','#c2c800','#c87c00']
  const color = colors[colorIndex]
  colorIndex = colorIndex + 1
  if (colorIndex >= colors.length) {
    colorIndex = 0
  }
  return color
}

let x = 192
let y = 64
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

  const shouldChange = Math.random() < 0.1
  if (shouldChange) {
    color = getRandomColor()
    orientation = Math.floor(Math.random() * 4)
  }

  moveForward()
}

export {
  x, y,
  setPosition,
  move,
}