const number1 = document.querySelector('#number1');
let sign = document.querySelector('#op')
const number2 = document.querySelector('#number2');
const form2 = document.getElementById('myform');
const outPut = document.querySelector('.output');
const btn = document.querySelector('.btn')


const calc = (e) => {
    e.preventDefault()
    const num1 = Number(number1.value)  
    const num2 = Number(number2.value)
    const opSign = sign.value

    const result = eval(`${num1} ${opSign} ${num2}`)


    const outPutP = document.createElement('p')
    outPutP.innerText = `${number1.value} ${sign.value} ${number2.value} = ${result}`
    outPut.appendChild(outPutP) 

    number1.value = ''
    number2.value = ''
    sign.value = ''
  };
  
  form2.addEventListener('submit', calc)

  btn.addEventListener('click', (e) => {

    // outPut.remove()

    const outPutField = outPut.childNodes

    outPutField.forEach(element => {
        element.remove()
    })
})

console.log()