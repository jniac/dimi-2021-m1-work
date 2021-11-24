import colors from './colors.js'

export const canvas = document.querySelector('canvas')
export const context = canvas.getContext('2d')

export const resizeCanvas = (width, height) => {
  canvas.width = width
  canvas.height = height

  // Important: repeindre en blanc le canvas après l'avoir redimensionné.
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)
}

/**
 * Change la couleur d'un pixel du canvas.
 * @param {number} x 
 * @param {number} y 
 * @param {string} color Une couleur au format CSS (#f00, #ccff33, rgb(255, 0, 0), crimson etc.)
 */
export const setPixel = (x, y, color) => {
  
  if (/^\w$/i.test(color)) {
    color = colors[color] || 'red'
  }

  context.fillStyle = color
  context.fillRect(x, y, 1, 1)
}

/**
 * Récupère la valeur d'un pixel du canvas.
 * @param {number} x 
 * @param {number} y 
 * @returns Un chaîne de caractère du type "#ff0000" (les lettres sont en bas de casse).
 */
export const getPixel = (x, y) => {

  const [r, g, b] = context.getImageData(x, y, 1, 1).data
  const rgb = r << 16 | g << 8 | b
  return `#${rgb.toString(16).padStart(6, '0')}`
}

export const clampPosition = (x, y) => {
  if (x < 0) {
    x = 0
  }
  if (x > canvas.width - 1) {
    x = canvas.width - 1
  }
  if (y < 0) {
    y = 0
  }
  if (y > canvas.height - 1) {
    y = canvas.height - 1
  }
  return { x, y }
}
