function acao(){
    let modal = document.querySelector(".modal")
    let button = document.querySelector('.button')
    button.style.display = 'none'
    modal.style.display = "block"
}
function fechar(){
    let modal = document.querySelector(".modal") 
    let button = document.querySelector('.button')
    button.style.display = 'block'
    modal.style.display = "none"
    }


    let cor = "white"

function mudarfundo(){
    let fundo = document.getElementById("container")
    
        if(cor === "white"){
        fundo.style.backgroundColor = "black";
        cor = "black"
        }else{
            fundo.style.backgroundColor = "white"; 
            cor = "white"
        }
        console.log(cor)
    }
function corAleatoria(){
    const cores = ["blue", "white", "orage", "black", "pink", "purple", "aqua", "red", "yellow"];
    const cor = Math.floor(Math.random() * cores.length);
    let fundo = document.getElementById("container")
    fundo.style.backgroundColor = (cores[cor]);
    console.log(cores[cor])
}
