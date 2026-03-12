const video = document.getElementById("introVideo")
const carousel = document.getElementById("carousel")
const image = document.getElementById("carouselImage")

const images = [
"assets/contact/contact-1.png"
]

let index = 0

function showSlide(){
image.src = images[index]
}

function startCarousel(){

carousel.classList.remove("hidden")

showSlide()

setInterval(()=>{

index++
if(index >= images.length) index = 0

showSlide()

},4000)

}

video.addEventListener("ended",()=>{

video.style.display="none"

startCarousel()

})