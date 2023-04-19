// ho recuperato da html container.
let contenitoreElementi = document.getElementById("conteiner");

// clreao un array di tutte le slide con classe in html "slide".
let listaSlide = document.getElementsByClassName("slide");
console.log(listaSlide);

// creo variabile bottone AVANTI/INDIETRO.
let  btnAvanti = document.getElementById("btnNext");
let btnIndietro = document.getElementById("btnBack");

let immagini = ["./img/01.webp", "./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"]


for (let c = 0; c < immagini.length; c++) {
    const a = immagini[c];
    let immagine = document.createElement("img");
    immagine.src = a;
    document.getElementById("boxSlide").append(immagine);
    immagine.className = "slide dNone";

}

// variabile di appoggio
let slideCorrente = 0;

btnAvanti.addEventListener("click", function(){

    if( slideCorrente < 4){

        for (let c = 0; c < listaSlide.length; c++) {
    
            let slideIncrementata = listaSlide[c];
        
            if( c == slideCorrente+1 ){
                slideIncrementata.classList.remove("dNone");
                console.log(" slide corrente:" + c + " va visualizzata")
            } else{
                slideIncrementata.classList.add("dNone");
                console.log(" slide corrente:" + c + " va nascosta")
            }
        }
    
        slideCorrente++;
    } else{
        console.log("non va piu avanti di cosi");
    }

})

btnIndietro.addEventListener("click", function(){

    if ( slideCorrente >0 ){
        for (let c = 0; c < listaSlide.length; c++) {
    
            let slideIncrementata = listaSlide[c];
        
            if( c == slideCorrente-1 ){
                slideIncrementata.classList.remove("dNone");
                console.log(" slide corrente:" + c + " va visualizzata")
            } else{
                slideIncrementata.classList.add("dNone");
                console.log(" slide corrente:" + c + " va nascosta")
            }
        }

        slideCorrente--;
    } else{
        console.log("non va piu indietro adi cosi");
    }



})


