//Enter and exit fullscreen
const openBTN = document.querySelector("#abrir-pantalla-completa")
const exitBTN = document.querySelector("#salir-pantalla-completa")

const enterFullScreen = () =>{document.documentElement.requestFullscreen()}
const exitFullScreen = () => {document.exitFullscreen()}

openBTN.addEventListener("click", enterFullScreen)
exitBTN.addEventListener("click", exitFullScreen)
