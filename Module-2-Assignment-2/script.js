

const btn = document.getElementById('calculateBtn')
const result = document.getElementById('result')
let message = document.getElementById('message')
const reset = document.getElementById('reset')

let weight;
let height;
let bmi;

btn.addEventListener("click", calculateBMI)
reset.addEventListener("click", clearAll)

function calculateBMI(e){
    e.preventDefault()
    
     weight = document.getElementById('weightInput').value
     height = document.getElementById('heightInput').value
     if(weight==="" && height ===""){
        result.innerHTML = "Enter Weight and Height First 🤭"
        message.innerHTML = "Don't be a Over Smart "
     }else{
    height = height/100
     bmi= (weight/(height*height)).toFixed(2)
    result.innerHTML = `Your BMI is: ${bmi}`
    if(bmi<18.5){
        message.innerHTML = "You are Under Weight 😶"
    }else if(bmi>=18.5 &&  bmi<24.9){
        message.innerHTML =" You are in Normal Shape ☺"
    }else if(bmi>=25.0 && bmi<29.9){
        message.innerHTML =" You are Over Weight 😫"
    }else{
        message.innerHTML =" You are a Giant 😲"
    }}
    
}

function clearAll(){
  return document.getElementsByTagName('form').reset()
}