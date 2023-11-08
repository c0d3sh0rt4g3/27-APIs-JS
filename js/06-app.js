// Recognizing voice
const exit = document.querySelector("#salida")
const microphone = document.querySelector("#microfono")

const execSpeechAPI = () =>{
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.start()
    recognition.onstart = () =>{
        exit.classList.add("mostrar")
        exit.textContent = "Hearing..."
    }
    recognition.onspeechend = () =>{
        exit.textContent = "Stopped hearing"
        recognition.stop()
    }
}

microphone.addEventListener("click", execSpeechAPI)