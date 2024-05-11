// function addUp(num) {
//     let s=0
//     for(let i=0; i<num+1; i++){
//         s = s+i
//     }
//     return s	
// }

// function countTrue(arr) {
//     let cpt = 0
//     for( let i=0; i<arr.length; i++){
//         if (arr[i] == true){
//             cpt +=1
//         }
//     }
//     console.log(cpt)
//     return cpt
// }

let arr = [ "1", "a", "2b", "b"]
let listnumber= [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
let b = []
let c = "tableau vide"
for (let elt of arr){
    for (let num of listnumber){
        if ( elt.includes(num)){
            b.push(elt)
            break
        }
    }
    console.log(b)
}
