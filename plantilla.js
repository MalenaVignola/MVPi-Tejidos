const contenedor = document.querySelector('.contenedor')
const dot = document.querySelectorAll('.dot')

dot.forEach( (dots, i) => {
    dot[i].addEventListener('click',()=> {
        let posicion = i
        let calculo= posicion * -50

        contenedor.style.transform = `translateX(${ calculo }%)`

        dot.forEach( (dots, i)=> {
            dot[i].classList.remove('activo')
        })
        dot[i].classList.add('activo')
    })
})

const contener = document.querySelector('.contener')
const dote = document.querySelectorAll('.dote')

dote.forEach( (dotes, i) => {
    dote[i].addEventListener('click',()=> {
        let posicion = i
        let calculo= posicion * -50

        contener.style.transform = `translateX(${ calculo }%)`

        dote.forEach( (dotes, i)=> {
            dote[i].classList.remove('activos')
        })
        dote[i].classList.add('activos')
    })
})