import { canvas } from '../common/canvas.js'
import * as jniacWalker from '../jniac/langton-ant/js/my-walker.js'
import * as walkermariem from '../mariemserssi/langton-ant/js/walkermariem.js'
import * as mariaWalker from '../mariastephan28/langton-ant/js/my-walker.js'
import * as maelcmpWalker from '../MaelCmp/langton-ant/js/my-walker.js'
import * as amelieWalker from '../AmelieMarmot/langton-ant/js/my-walker.js'
import * as ludivineWalker from '../ludivinedourd/langton-ant/js/my-walker.js'
import * as latyr954Walker from '../latyr954/langton-ant/js/my-walker.js'
import * as mariemarteilWalker from '../mariemarteil/langton-ant/js/my-walker.js'
import * as sarahWalker from'../SarahBenAyad/langton-ant/js/mywalker.js'
import * as priscilliaWalker from '../PriscilliaOuaga/langton-ant/js/my-walker.js'

export const allWalkers = [
  jniacWalker,
  walkermariem,
  jniacWalker,
  mariaWalker,
  maelcmpWalker,
  amelieWalker,
  ludivineWalker,
  latyr954Walker,
  mariemarteilWalker,
  priscilliaWalker,
  sarahWalker,
]

export const initPosition = () => {
  for (const walker of allWalkers) {
    if (walker.setPosition === undefined) {
      console.log('invalid walker:', walker)
      continue
    }

    walker.setPosition(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height),
    )
  }
}

export const update = () => {
  for (const walker of allWalkers) {
    walker.move?.()
  }
}
