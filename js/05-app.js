// Background execution (Tab change)

document.addEventListener("visibilitychange", () =>{
    const visibility = document.visibilityState
    console.log(visibility)
    if (visibility === "visible"){
        console.log("Reproducing...")
    }else {
        console.log("Pausing video...")
    }
})