const counterValue = document.querySelector("#value")
const btnIncrement = document.querySelector('[data-action="increment"]')
const btnDecrement =document.querySelector('[data-action="decrement"]')

 
const counter = {
    value: 0,

    increment() {
        this.value += 1
    },
    
     decrement() {
        this.value -= 1
    }
}


function onIncrement() {
    counter.increment()
    counterValue.textContent = counter.value
}

function onDecrement() {
    counter.decrement()
    counterValue.textContent = counter.value
}


btnIncrement.addEventListener('click', onIncrement)
btnDecrement.addEventListener('click', onDecrement)