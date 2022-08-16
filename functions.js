let slider = (id, value, width) => {
  let slider = document.querySelectorAll(id)
  for (let i = 0; i < slider.length; i++) {
    if(slider[i].style.width == "") {
      slider[i].style.width = width
    }
    if(slider[i].style.marginLeft == "") {
      slider[i].style.marginLeft = 0
    }
    position = parseInt(slider[i].style.marginLeft) + parseInt(value)
    if (parseInt(slider[i].style.marginLeft) == 0 && parseInt(value) > 0) {
      position = parseInt(value)-(parseInt(slider[i].style.width))
    }
    if (-parseInt(slider[i].style.marginLeft) == parseInt(slider[i].style.width) - 100
      && parseInt(value) < 0) {
      position = 0
    }
    slider[i].style.marginLeft = position.toString() + '%'
  }
}