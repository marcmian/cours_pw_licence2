let connexion = document.getElementsByClassName("s1-btn-white")[0]
console.log(connexion)

function modifier(){
    let analyse = document.getElementsByClassName("s1-titre")[0]
    console.log(analyse)
    analyse.innerText=""
}

connexion.addEventListener('click', modifier)

let inscrire = document.getElementsByClassName("s1-btn-black")[0]
console.log(inscrire)

function afficher(){
    let analyse = document.getElementsByClassName("s1-titre")[0]
    console.log(analyse)
    analyse.innerHTML= "<p>Analyser l'ensemble du territoire <br> pour une croissance plus intelligente </p>"
}

inscrire.addEventListener('click', afficher)