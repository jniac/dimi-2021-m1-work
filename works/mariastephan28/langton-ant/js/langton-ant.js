import { getPixel, setPixel } from '../../../common/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

let x = 18
let y = 18
let orientation = turnRight

const moveForward = () => {
  if (orientation === LEFT) {
    x = x + 1
  } else if (orientation === TOP) {
    y = y + 1
  } else if (orientation === LEFT) {
    x = x - 1
  } else if (orientation === RIGHT) {
    y = y - 1
  }
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
  
  const color = getPixel(x, y)

  // Algorithme de la fourmi de langton :
  // Pour une couleur précise (ici le blanc "#ffffff") :
  //   tourner à gauche ("turnLeft()")
  //   et peindre le pixel en un couleur sympa ("turquoise")
  // sinon :
  //   tourner à droite ("turnRight()")
  //   et remettre le pixel en blanc ("#ffffff")
  if (color === '#BCD439') {
    turnLeft()    
    setPixel(x, y, '#41B0EB')
  } else {
    turnRight()
    setPixel(x, y, '#BCD439')
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
  setPosition,
}

