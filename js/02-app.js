document.addEventListener("DOMContentLoaded", () =>{
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting === true){
            console.log("You're looking to premium container")
        }
    })
    observer.observe(document.querySelector(".premium"))
})
