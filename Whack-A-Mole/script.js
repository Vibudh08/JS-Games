const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let timerId
let currentTime = 60

function randomSquare(){
    square.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomSquare = square[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}
randomSquare()

square.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare,500)
}
moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearTimeout(timerId)
        alert('Game Over, Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)