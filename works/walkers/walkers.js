import { canvas } from '../common/canvas.js'
import * as jniacWalker from '../jniac/langton-ant/js/my-walker.js'

export const allWalkers = [
  jniacWalker,
]

export const initPosition = () => {
  for (const walker of allWalkers) {
    walker.setPosition(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height),
    )
  }
}

export const update = () => {
  for (const walker of allWalkers) {
    walker.move()
  }
}
