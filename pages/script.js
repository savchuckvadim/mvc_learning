let div = document.getElementById('div')
let p = document.getElementById('p')


let i = 0


let foo = () => {
   
    if(i<1){
        i++
        // div.className = `one_${i}`
        div.style.background = 'yellow'
    }else{
        i=0
        // div.className = `one_${i}`
        div.style.background = 'black'
    }

}
setInterval(foo, 3000)
