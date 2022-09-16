//########################## TIME FUNCTION #############################

function showTime(){
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    if(hour < 10) hour = `0${hour}`
    if(minute < 10) minute = `0${minute}`
    if(second < 10) second = `0${second}`
    const tempo = `<p>${hour}</p> <p>${minute}</p> <p>${second}</p>`

    const show = document.querySelector("div.content")
    show.innerHTML = tempo
}

addEventListener('load', initTime)

function initTime(){
    setInterval(showTime, 1000)
}

//########################### LIST START ################################

var text = document.getElementById('txt')
var box = document.getElementById('list')
var ad = document.getElementById('ad').addEventListener('click', addList)


//FUNCTION TO ADD THE LIST
function addList(){
    box.innerHTML += `<li>${text.value}</li><br>`
    box.style.font = 'normal 15pt fantasy'
    text.value = ''
    text.focus()
}