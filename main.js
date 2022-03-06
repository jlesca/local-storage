let txt = document.querySelector('input')
let btn = document.querySelector('button')





if(document.querySelector('h1')){
    let tit = document.querySelector('h1').innerHTML +=localStorage.getItem('User')
}else{
    btn.addEventListener("click", ()=>{
        localStorage.setItem('User', txt.value)
        alert('Bievenido/a ' + txt.value)
    })

    if(localStorage.getItem('User')){
        alert('Bienvenido/a ' + localStorage.getItem('User'))
    }
}
