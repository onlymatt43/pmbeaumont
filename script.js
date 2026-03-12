const video = document.getElementById("introVideo")
const carousel = document.getElementById("carousel")
const image = document.getElementById("carouselImage")

const page = document.body.dataset.gallery

let images = []

if(page === "produits"){
images = [
"assets/produits/Untitled-2.png",
"assets/produits/Untitled-3.png",
"assets/produits/Untitled-4.png",
"assets/produits/Untitled-5.png",
"assets/produits/Untitled-6.png"
]
}

if(page === "contact"){
images = [
"assets/contact/contact-1.png"
]
}

if(page === "evenements"){
images = [
"assets/evenements/ev1.png",
"assets/evenements/ev2.png",
"assets/evenements/ev3.png"
]
}

let index = 0

function showSlide(){
image.src = images[index]
}

function startCarousel(){

carousel.classList.remove("hidden")

showSlide()

setInterval(()=>{

index++

if(index >= images.length){
index = 0
}

showSlide()

},3000)

}

video.addEventListener("ended",()=>{

video.style.display="none"

startCarousel()

})