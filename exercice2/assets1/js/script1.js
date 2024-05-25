let contactez = document.getElementsByClassName("ce11")[0]
let ci = true
console.log(contactez)

function replier(){
    if (ci){
        let np = document.getElementsByClassName("ce12")[0]
        console.log(np)
        np.innerText = ""

        let ae = document.getElementsByClassName("ce13")[0]
        console.log(ae)
        ae.innerText = ""

        let dp = document.getElementsByClassName("ce14")[0]
        console.log(dp)
        dp.innerText = ""
        
        ci = false 

    } else{
        let np = document.getElementsByClassName("ce12")[0]
        console.log(np)
        np.innerHTML = "<div><p>Nom et prénoms</p></div>"

        let ae = document.getElementsByClassName("ce13")[0]
        console.log(ae)
        ae.innerHTML = "<div><p>Adresse électronique</p></div>"

        let dp = document.getElementsByClassName("ce14")[0]
        console.log(dp)
        dp.innerHTML = "<div><p>Description du projet</p></div>"
        
        ci = true
    }

}

contactez.addEventListener('click', replier)
