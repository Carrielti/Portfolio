const groupServices = document.querySelectorAll(".group-services")
const point = document.querySelectorAll(".point-service .point")
const buttonNext = document.querySelector(".next")
const buttonPrevious = document.querySelector(".previous")

let timer;
let cardAtual = 0;

function nextCard(){
    groupServices[cardAtual].classList.remove("active");

    point[cardAtual].classList.remove("active");

    cardAtual++;

    if (cardAtual === groupServices.length){
        cardAtual = 0;
    }

    groupServices[cardAtual].classList.add("active")

    point[cardAtual].classList.add("active")
}

function previousCard(){
    groupServices[cardAtual].classList.remove("active");
    point[cardAtual].classList.remove("active");

    cardAtual--;

    if (cardAtual < 0){
        cardAtual = groupServices.length - 1;
    }

    groupServices[cardAtual].classList.add("active")
    point[cardAtual].classList.add("active")
}

function iniciarTimer(){

    clearTimeout(timer);

    timer = setTimeout(() => {
        nextCard();
        iniciarTimer();
    }, 5000);
}



buttonNext.addEventListener("click", () => {
    nextCard();
    iniciarTimer();
})

buttonPrevious.addEventListener("click", () => {
    previousCard();
    iniciarTimer();
})

point.forEach((pointer,index) => {
    pointer.addEventListener("click", () => {
        groupServices[cardAtual].classList.remove("active");
        point[cardAtual].classList.remove("active");

        cardAtual = index

        groupServices[cardAtual].classList.add("active");
        point[cardAtual].classList.add("active");

    })
})