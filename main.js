const amt= document.getElementById("amt")
const i= document.getElementById("i")
const y= document.getElementById("y")
const calcBtn = document.querySelector(".calcBtn")

const monthlyEl = document.getElementById("monthly")
const totalEl = document.getElementById("total")
const interestEl = document.getElementById("interest")

calcBtn.addEventListener("click", ()=>{

    //checking the inputs
    if(amt.value && i.value && y.value){
        calcThat()
        document.querySelector(".result").style.display = "block"
    }
})

function calcThat(){
    
    let p = parseFloat(amt.value)
    let r = parseFloat(i.value)/100/12
    let n = parseFloat(y.value)*12

    let x = Math.pow((1+r), n)
    let monthly = (p*r*x)/(x-1)

    // testing
    console.log(monthly.toFixed(2))

    //display answers
    if(isFinite(monthly)){
        monthlyEl.value = monthly.toFixed(2)
        totalEl.value = (monthly*n).toFixed(2)
        interestEl.value = (monthly*n-p).toFixed(2)
    }else{
        alert("Something went wrong!!")
    }

}