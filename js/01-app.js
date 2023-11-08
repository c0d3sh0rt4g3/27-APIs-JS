const notifyButton = document.querySelector("#notificar")
const seeNotificationButton = document.querySelector("#verNotificacion")

notifyButton.addEventListener("click", () =>{
    Notification.requestPermission().then((result) => {
        console.log(`The result is ${result}`)
    })
})

seeNotificationButton.addEventListener("click", () =>{
    if (Notification.permission === "granted"){
        new Notification("That's my notification", {
            body: "Lectures"
        })
    }
})