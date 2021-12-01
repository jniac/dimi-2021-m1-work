import { canvas } from '../common/canvas.js'
import * as jniacWalker from '../jniac/langton-ant/js/my-walker.js'
import * as mariaWalker from '../mariastephan28/langton-ant/js/my-walker.js'
import * as amelieWalker from '../AmelieMarmot/langton-ant/js/my-walker.js'

export const allWalkers = [
  jniacWalker,
  mariaWalker,
  amelieWalker
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
