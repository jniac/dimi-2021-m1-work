import { canvas, resizeCanvas } from '../common/canvas.js'
import { fitIntoParent } from '../common/utils.js'
import * as walkers from './walkers.js'

resizeCanvas(512, 256)
fitIntoParent(canvas)

let paused = false
let speed = 1
let frame = 0

walkers.initPosition()

const loopUpdate = () => {
  for (let i = 0; i < speed; i++) {
    walkers.update()
    frame += 1
  }
}

const loop = () => {
  requestAnimationFrame(loop)

  if (paused === false) {
    loopUpdate()
  }
  document.querySelector('#frame').innerHTML = `#${frame.toString().padStart(5, '0')}@x${speed} ${paused ? ' (paused)' : ''}`
}

document.querySelector('#play-pause').onclick = () => {
  paused = !paused
}

document.querySelector('#speed').oninput = () => {
  const value = document.querySelector('#speed').value
  speed = value
}

canvas.onclick = () => {
  canvas.requestFullscreen()
}

// intialiser la boucle d'animation par un premier appel
loop()
