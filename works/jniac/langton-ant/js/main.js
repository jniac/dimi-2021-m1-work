import { resizeCanvas } from '../../../common/canvas.js'
import * as ant from './langton-ant.js'
import * as drunken from './drunken-walker.js'
import * as myWalker from './my-walker.js'

const size = 1024

resizeCanvas(size, size)

ant.setPosition(size / 2, size / 2)
drunken.setPosition(size / 2, size / 2)

let paused = true
let speed = 1
let frame = 0

const update = () => {
  const t = window.performance.now()

  let realSpeed = 0
  while (window.performance.now() - t < 16) {
    ant.move()
    drunken.move()
    myWalker.move()

    frame += 1
    realSpeed += 1

    if (realSpeed === speed) {
      break
    } 
  }

  const frameString = frame.toString().padStart(5, '0')
  const speedString = realSpeed.toString().padStart(4, '_')
  document.querySelector('#frame').innerHTML = `#${frameString} @x${speedString}`
}

const loop = () => {
  requestAnimationFrame(loop)

  if (paused === false) {
    update()
  }
}

document.querySelector('#update').onclick = () => {
  update()
}

document.querySelector('#play-pause').onclick = () => {
  paused = !paused
}

document.querySelector('#speed').oninput = () => {
  const value = document.querySelector('#speed').value
  speed = parseInt(value)
}

// intialiser la boucle d'animation par un premier appel
loop()
