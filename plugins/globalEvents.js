const isTouch = isTouchDevice()

export default function globalEvents({ store }) {
  setScroll()
  if (isTouch) {
    setInterval(setScroll, 15)
  } else {
    document.addEventListener('scroll', setScroll)
  }

  function setScroll() {
    store.commit('events/SCROLL_Y', scrollY)
  }
}

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}
