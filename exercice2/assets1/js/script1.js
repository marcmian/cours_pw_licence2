let contactez = document.getElementsByClassName("ce11")[0]
console.log(contactez)

function replier(){
    let np = document.getElementsByClassName("ce12")[0]
    console.log(np)
    np.innerText = ""

    let ae = document.getElementsByClassName("ce13")[0]
    console.log(ae)
    ae.innerText = ""

    let dp = document.getElementsByClassName("ce14")[0]
    console.log(dp)
    dp.innerText = ""

}

contactez.addEventListener('click', replier)