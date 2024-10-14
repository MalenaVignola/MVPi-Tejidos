const filtro = document.querySelectorAll(".botonn button")
const filCards = document.querySelectorAll(".cartas .card")


const filtroCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
}

const filtrable = e => {
    filCards.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "todos") {
            card.classList.remove("hide");
        }
    })
}


filtro.forEach(button => button.addEventListener("click", filtroCards));
filtro.forEach(button => button.addEventListener("click", filtrable));