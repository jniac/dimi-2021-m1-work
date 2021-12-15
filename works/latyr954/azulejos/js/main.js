const getRandomColor = () => {
    let tab = ['#000000','#FFFFFF','#DCDCDC']
    const randomColor = tab[Math.floor(Math.random() * tab.length)];
    return randomColor
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
        tile.style.left = `${x * 180}px`
        tile.style.top = `${y * 180}px`
      }
    }
  }
  
  createGrid(4, 3)