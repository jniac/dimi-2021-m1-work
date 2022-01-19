
const getRandomColor = () => {
  const r = Math.random()
  if (r < 0.5) {
    if (Math.random() < 0.5) {
      return '#b6b6f0'
    }
    return '#af9ce6'
  }
  if (r < 0.7) {
    return '#9197eb'
  }
  if (r < 0.9) {
    return '#9ea2ba'
  }
  return '#6a41a3'
}

const createType1 = () => {
  const source = document.querySelector('#library .type1')
  const clone = source.cloneNode(true)
  clone.style.backgroundColor = getRandomColor()
  clone.querySelector('.layer1').style.backgroundColor = getRandomColor()
  clone.querySelector('.layer2').style.backgroundColor = getRandomColor()
  clone.querySelector('.layer3').style.backgroundColor = getRandomColor()
  return clone
}

const createTile = () => {
  const div = document.createElement('div')
  div.className = 'tile'
  document.querySelector('main').append(div)

  div.append(createType1())

  return div
}

const createGrid = (col, row) => {
  for (let y = 0; y < row; y += 1) {
    for (let x = 0; x < col; x += 1) {
      const tile = createTile()
      tile.style.left = `${x * 120}px`
      tile.style.top = `${y * 120}px`
    }
  }
}

createGrid(4, 3)