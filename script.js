let firstName = document.getElementById("fname")
let lastName = document.getElementById("lname")
let submit = document.getElementById("sub-btn")
let reset = document.getElementById("res-btn")
let lalaki = document.getElementById("male")
let babae = document.getElementById("female")
let lakad = document.getElementById("walk")
let bisikleta = document.getElementById("bike")
let sasakyan = document.getElementById("car")
let jip = document.getElementById("jeep")
let kaarawan = document.getElementById("birthday")
let huyu = document.getElementById("anoka")
firstName.value
lastName.value
huyu.value

submit.addEventListener("click",() =>{

    if(firstName.value.trim() === ""){
        alert("required to fill")
    }
    
    if(lastName.value.trim() === ""){
        alert("required to fill")
    }

    if(huyu.value.trim() === ""){
        alert("required to fill")
    }
    
})

reset.addEventListener("click",() =>{
    firstName.value = ""
    lastName.value = ""
    lalaki.checked = false
    babae.checked = false
    lakad.checked = false
    bisikleta.checked = false
    sasakyan.checked = false
    jip.checked = false
    kaarawan.value = ""
    huyu.value = ""
})