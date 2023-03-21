let time = 25
let timeBox = document.getElementById("time-box")
let shortBreak = document.getElementById('shortBreak')
let pomodoro = document.getElementById('pomodoro')
let longBreak = document.getElementById('longBreak')
let start = document.querySelector(".start")
let pause = document.getElementById('pause')
let sumTime = null

function startTime() {
    let timeInSeconds = time * 60
    
    count = setInterval(function() {
        timeInSeconds--;
        if(timeInSeconds < 0) {
            clearInterval(timeInSeconds);
        }
        let minuts = Math.floor(timeInSeconds / 60)
        let seconds = timeInSeconds % 60
        timeBox.innerHTML = minuts + ":" + seconds
    }, 1000)
}

function stopTime() {
    clearInterval(sumTime)
}


start.addEventListener("click", function() {
    start.style.display = "none"
    pause.style.display = "block"
    start.appendChild = startTime()
})

pause.addEventListener("click", function() {
    pause.style.display = "none"
    start.style.display = "block"
    stopTime()
})




pomodoro.addEventListener("click", function() {
    timeBox.innerText = '25:00'
    time = 25
    pomodoro.style.background = 'rgba(0, 0, 0, 0.15)'
    pomodoro.style.padding = '5px'
    pomodoro.style.borderRadius = '5px'
    shortBreak.style.background = 'none'
    longBreak.style.background = 'none'
    document.body.style.backgroundColor = 'rgb(186, 73, 73)'
    start.style.color = 'rgb(186, 73, 73)'
})

shortBreak.addEventListener("click", function() {
    timeBox.innerText = '5:00'
    time = 5
    shortBreak.style.background = 'rgba(0, 0, 0, 0.15)'
    shortBreak.style.padding = '5px'
    shortBreak.style.borderRadius = '5px'
    pomodoro.style.background = 'none'
    longBreak.style.background = 'none'
    document.body.style.backgroundColor = 'rgb(56, 133, 138)'
    start.style.color = 'rgb(56, 133, 138)'
})

longBreak.addEventListener("click", function() {
    timeBox.innerText = '15:00'
    time = 15
    longBreak.style.background = 'rgba(0, 0, 0, 0.15)'
    longBreak.style.padding = '5px'
    longBreak.style.borderRadius = '5px'
    shortBreak.style.background = 'none'
    pomodoro.style.background = 'none'
    document.body.style.backgroundColor = 'rgb(57, 112, 151)'
    start.style.color = 'rgb(57, 112, 151)'
})