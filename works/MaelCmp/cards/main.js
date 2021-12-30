const getRandomClassName = () => {
  const r = Math.random()

  // 40% de chance de retourner "silver"
  if (r < 0.4) {
    return 'silver'
  }

  // 15% (55 - 40) de chance de retourner "gold"
  if (r < 0.55) {
    return 'gold'
  }

  // 5% (60 - 55) de chance de retourner "UR"
  if (r < 0.6) {
    return 'ur'
  }
  
  // dans tous les autres cas renvoyer ""
  return 'normal'
}

const getRandomEmoji = () => {
  let tab = ['🤖','👾','👽','⚡','☄️','🌌','⚜️','👻']
  const randomEmoji = tab[Math.floor(Math.random() * tab.length)];
  return randomEmoji
}

const clone = (source) => {
	const clone = source.cloneNode(true)
	document.body.append(clone)
  
	const x = Math.round(Math.random() * window.innerWidth) - 100
	const y = Math.round(Math.random() * window.innerHeight) - 100
	clone.style.left = x + 'px'
	clone.style.top = y + 'px'
	const angle = Math.round(Math.random() * 70 - 35)
	clone.style.transform = `rotate(${angle}deg)`

  // utilise la fonction getRandomClassName afin de créer une carte aléatoire
  const randomClass = getRandomClassName()
  clone.className = `card ${randomClass}`

  // utilise la fonction getRandomEmoji afin de créer une carte aléatoire
  clone.querySelector('div div div').innerHTML = getRandomEmoji() + `<i class="fa fa-trash-o" id="trash" style="font-size:28px" onclick="destroyCard(event)"></i>`
 
  }
  
  const cloneOnClick = (event) => {
	// console.log(event.currentTarget)
	const source = event.currentTarget
	clone(source)
  }
  
  const destroyCard = (event) => {
	const card = event.currentTarget.parentElement
	// console.log(card)
	card.remove()
	event.stopPropagation()
  }
  
  window.onkeydown = (event) => {
	// console.log(event.code)
    if (event.code === 'Space') {
      const source = document.querySelector('div.card')
      clone(source)
    }
  }


// Commande pour afficher une alerte
////////////////////////////////////

//alert("Affiche une alerte en haut")