//modal 


let modal = document.querySelectorAll(".modal-conteiner")
let modalBtns = document.querySelectorAll(".boton-modal")
let modalClose = document.querySelectorAll(".close-modal")

function mostrarModal (f) {
        modal[f].classList.toggle("modal-active")
}


modalBtns.forEach((el,f)=> {
        el.addEventListener("click",() => {
            mostrarModal(f)
        })
})

modalClose.forEach((el,f) =>{
        el.addEventListener("click", ()=>{
            mostrarModal(f)
        })
})

// proyectos 

                // botones
// let botonHtml = document.getElementById("proyecto-html")
// let botonJs = document.getElementById("proyecto-js")
// let botonPortafolio = document.getElementById("proyecto-portafolio")
// let botonProyectos = document.getElementById("todos-los-proyectos")


let botones = document.querySelectorAll(".boton-cart")
                // carts
let cartHtml = document.getElementById("html-cart")
let cartJs = document.getElementById("js-cart")
let cartProyecto = document.getElementById("portafolio-cart")

function agregarAnimacionFadeOut(el){
        el.classList.add("ocultar-cart")
        console.log("gola")
}

botones.forEach((el,f) =>{
        el.addEventListener("click", ()=>{
                if(f == 0 ){
                        let arrayProyect = [cartHtml,cartJs,cartProyecto]
                                arrayProyect.forEach(el => el.classList.remove("ocultar-cart","animation-cart-out"))
                }else if (f == 1){
                        let arrayProyect2 = [cartJs,cartProyecto]
                        arrayProyect2.forEach((el) => {el.classList.add("animation-cart-out")
                                setTimeout(function (){
                                        arrayProyect2.forEach(el => el.classList.add("ocultar-cart"))
                                        cartHtml.classList.remove("ocultar-cart","animation-cart-out")
                                },1500)
                        })
                }else if (f == 2 ){
                        let arrayProyect3 = [cartHtml,cartProyecto]
                        arrayProyect3.forEach(el => el.classList.add("animation-cart-out"))
                        setTimeout(function (){
                                arrayProyect3.forEach(el => el.classList.add("ocultar-cart"))
                                cartJs.classList.remove("ocultar-cart","animation-cart-out")
                        },1500)
                        
                }else {
                        let arrayProyect4 = [cartHtml,cartJs]
                        arrayProyect4.forEach(el => el.classList.add("animation-cart-out"))
                        setTimeout(function (){
                                arrayProyect4.forEach(el => el.classList.add("ocultar-cart"))
                                cartProyecto.classList.remove("ocultar-cart","animation-cart-out")
                        },1500)
                }
        })
})





// intentar hacer una funcion que abarque los 3 botones y oculte la carta correspondiente 
// si damos click a htmlboton que se oculten las otras 2, pero con una sola funcion 


//evento scroll 

let home = document.getElementById("home")
let iconos = document.querySelectorAll(".iconos-nav")

console.dir(iconos)

function agregoFondoNav (p,e){

        p.classList.add("scroll")

        e.addEventListener("mouseout", () =>{
                p.classList.remove("scroll")
        })
}


let secciones = document.querySelectorAll(".scroll-icon")

secciones.forEach((e,f) => {
        e.addEventListener("mouseover", ()=>{
                if(f == 0){
                        agregoFondoNav(iconos[0],e)
                }else if (f ==1 ){
                        agregoFondoNav(iconos[1],e)
                }else if (f == 2){
                        agregoFondoNav(iconos[2],e)
                }else if (f ==3){
                        agregoFondoNav(iconos[3],e)
                }else if (f == 4){
                        agregoFondoNav(iconos[4],e)
                }
        })
})