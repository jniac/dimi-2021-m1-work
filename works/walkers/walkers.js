import { canvas } from '../common/canvas.js'
import * as jniacWalker from '../jniac/langton-ant/js/my-walker.js'

jniacWalker.setPosition(
  Math.floor(Math.random() * canvas.width),
  Math.floor(Math.random() * canvas.height),
)

export const update = () => {
  jniacWalker.move()
}
