const b=document.querySelector(".block")

x=0
y=0

setInterval(function moving (){
    if (x<=449 && y==0) {
        b.style.left=`${x}px`        
        x++
    }else if(x>=449 && y<=449){
        b.style.top=`${y}px`        
        y++
    }else if(y>=449 && x>=0){
        b.style.left=`${x}px` 
        x--
    }else if(x<=0 && y>=0){
        b.style.top=`${y}px`        
        y--
    }


    },1
)

let counter = document.querySelector('.counter')
let but1=document.querySelector('.start')
let but2=document.querySelector('.stop')

but1.onclick=()=>{
    setInterval(function(){
        counter.innerHTML++
    },1000)
}
but2.onclick=()=>{
    clearInterval(but1)
    counter = null
}
