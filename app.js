
function btn(){
    let height=parseFloat(document.getElementById("height").value)
    let weight=parseFloat(document.getElementById("weight").value)
    let bmi=weight/(height*height)
    let result=document.getElementById("bmi").innerText=bmi.toFixed(0)
    
}

