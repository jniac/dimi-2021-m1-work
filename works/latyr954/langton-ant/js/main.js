import { resizeCanvas } from '../../../common/canvas.js'
import * as ant from './langton-ant.js'
import * as drunken from './drunken-walker.js'
import * as myWalker from './my-walker.js'

resizeCanvas(128, 128)

ant.setPosition(128 / 2, 128 / 2)

let paused = true
let speed = 1
let frame = 0

const update = () => {
  for (let i = 0; i < speed; i++) {
    ant.move()
    drunken.move()
    myWalker.move()
    frame += 1
  }
  document.querySelector('#frame').innerHTML = `#${frame.toString().padStart(5, '0')}@x${speed}`
}

const loop = () => {
  requestAnimationFrame(loop)

  if (paused === false) {
    update()
  }
}

document.querySelector('#update').onclick = () => {
  update()
}

document.querySelector('#play-pause').onclick = () => {
  paused = !paused
}

document.querySelector('#speed').oninput = () => {
  const value = document.querySelector('#speed').value
  speed = value
}

// intialiser la boucle d'animation par un premier appel
loop()

<!DOCTYPE html>
<html lang="en">
<head>

    <title>Test Javascript</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

</head>

<body>

    <div id="x"></div>

    <script>

    var img = document.createElement("img");
    img.src = "matplotlib-grid-02.png";

    var div = document.getElementById("x");
    div.appendChild(img);
    //block.setAttribute("style", "text-align:center");

    </script>

</body>
</html>