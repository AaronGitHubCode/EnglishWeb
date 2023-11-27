const drawCanvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))
const music = document.getElementById('music')

const colors = {
    red: document.getElementById('red'),
    green: document.getElementById('green'),
    blue: document.getElementById('blue'),
    black: document.getElementById('black'),
    selectedColor: document.getElementById('selected-color')
}


const mouse = {x: -100, y: -100}

const LEFT_CLICK = 1
const dimensions = {width: 30, height: 30}

const chillMusic = new Audio('./chill.mp3')

const happySticker = new Image(30, 30)
happySticker.src = './small_happy.png'

let paused = false
let color = 'black'

drawCanvas.width = window.outerWidth - 200
drawCanvas.height = window.outerHeight - 200

setInterval(() => {
    document.getElementsByTagName('body').item(0).style.filter = 'blur(0px)'
}, 500)

const pencil = new Image()
pencil.src = './pencil.png'

setInterval(() => {
    drawCanvas.getContext('2d').fillStyle = color
    drawCanvas.getContext('2d').fillRect(mouse.x, mouse.y, dimensions.width, dimensions.height)
}, 0)

chillMusic.loop = true

music.addEventListener('mousedown', () => {
    paused = ! paused

    if (paused) {
        music.textContent = '🔊'
        chillMusic.play()
    }else {
        music.textContent = '🔈️'
        chillMusic.pause()
    }
})

colors.red.addEventListener('mousedown', () => {
    mouse.x = -100
    mouse.y = -100
    colors.selectedColor.textContent = '🟥'
    color = 'red'
})

colors.green.addEventListener('mousedown', () => {
    mouse.x = -100
    mouse.y = -100
    colors.selectedColor.textContent = '🟩'
    color = 'green'
})

colors.blue.addEventListener('mousedown', () => {
    mouse.x = -100
    mouse.y = -100
    colors.selectedColor.textContent = '🟦'
    color = 'blue'
})

colors.black.addEventListener('mousedown', () => {
    mouse.x = -100
    mouse.y = -100
    colors.selectedColor.textContent = '⬛️'
    color = 'black'
})

drawCanvas.addEventListener('mousemove', (mouseEvent) => {
    switch (mouseEvent.buttons) {
        case LEFT_CLICK:
            mouse.x = mouseEvent.offsetX
            mouse.y = mouseEvent.offsetY
            break
    }
})

window.addEventListener('keyup', (keyEvent) => {
    document.getElementsByTagName('h1').item(0).style.color = 'white'
            document.getElementsByTagName('h1').item(0).style.backgroundColor = 'black'
})

window.addEventListener('keydown', (keyEvent) => {
    switch (keyEvent.key) {
        case ' ':
            mouse.x = -100
            mouse.y = -100

            drawCanvas.getContext('2d').fillStyle = 'white'
            drawCanvas.getContext('2d').fillRect(0, 0, drawCanvas.width, drawCanvas.height)
            drawCanvas.getContext('2d').fillStyle = 'black'
            
            document.getElementsByTagName('h1').item(0).style.color = 'black'
            document.getElementsByTagName('h1').item(0).style.backgroundColor = 'white'
            break
    }
})

window.addEventListener('resize', (uiEvent) => {
    document.getElementsByTagName('body').item(0).style.filter = 'blur(10px)'
})