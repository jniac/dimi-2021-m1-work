
/**
 * 
 * @param {HTMLElement} element 
 * @param {"cover" | "contain"} mode 
 */
export const fitIntoParent = (element, mode = 'contain') => {
  if (!element || !element.parentElement) {
    return
  }

  element.style.removeProperty('width')
  element.style.removeProperty('height')

  const rect = element.getBoundingClientRect()
  const parentRect = element.parentElement.getBoundingClientRect()

  const ratioW = parentRect.width / rect.width
  const ratioH = parentRect.height / rect.height
  const ratio = (
    mode === 'contain' ? Math.min(ratioW, ratioH) : Math.max(ratioW, ratioH)
  )

  const w = rect.width * ratio
  const h = rect.height * ratio

  element.style.position = 'absolute'
  element.style.width = `${w.toFixed(1)}px`
  element.style.height = `${h.toFixed(1)}px`
  element.style.left = `${((parentRect.width - w) / 2).toFixed(1)}px`
  element.style.top = `${((parentRect.height - h) / 2).toFixed(1)}px`

  // if (element.parentElement.style.position === null) {
  //   element.parentElement.style.position = 'relative'
  // }

  requestAnimationFrame(() => fitIntoParent(element, mode))
  if (!element.dataset.fitIntoParent) {
    element.dataset.fitIntoParent = true
    window.addEventListener('resize', () => fitIntoParent(element, mode))
  }
}