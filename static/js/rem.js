(function () {
  var currClientWidth, fontValue, originWidth
  originWidth = 2208
  __resize()
  window.addEventListener('resize', __resize, false)
  function __resize () {
    currClientWidth = document.documentElement.clientWidth
    if (currClientWidth < 320) {
      currClientWidth = 320
    }
    fontValue = ((625 * currClientWidth) / originWidth).toFixed(2)
    document.documentElement.style.fontSize = fontValue + '%'
  }
})()
