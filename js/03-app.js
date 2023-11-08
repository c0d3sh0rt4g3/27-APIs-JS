//Check if we have internet
const online = navigator.onLine
console.log(online)

const updateNetState = () => {
    if (navigator.onLine){
        console.log("You're online")
    }else {
        console.log("You're offline")
    }
}

window.addEventListener("online", updateNetState)
window.addEventListener("offline", updateNetState)
