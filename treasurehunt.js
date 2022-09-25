var treasureLocation = Math.floor(Math.random()*12)
var bombLocation = Math.floor(Math.random()*12)
if (treasureLocation===bombLocation) {
  bombLocation = Math.floor(Math.random()*12)
}

const treasure = (location) => {
  if (treasureLocation===location) {
    alert(document.getElementById("outcome").innerHTML = "TREATS!")
        document.getElementById(location).innerHTML = "🍭"
  }
  else if (bombLocation===location) {
    alert(document.getElementById("outcome").innerHTML = "TRICK :O")
        document.getElementById(location).innerHTML = "👻"
  }
  else if(treasureLocation !== location && bombLocation !== location) {
    document.getElementById(location).innerHTML = "X"
  }
}