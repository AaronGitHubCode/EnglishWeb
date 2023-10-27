const frame = /** @type {HTMLCanvasElement} */ (document.getElementById('frame'))
const context = frame.getContext('2d')

const clearButton = document.getElementById('clear-button')

const options = document.getElementsByTagName('option')

const size = 12

const colors = [
    document.getElementById('red'),
    document.getElementById('green'),
    document.getElementById('blue'),
    document.getElementById('black')
]

context.fillStyle = 'black'

for (const color of colors) {
    color.onclick = () => {
        switch (color.id) {
            default:
                document.getElementsByTagName('body').item(0).style.backgroundColor = color.id
                document.getElementsByTagName('table').item(0).style.backgroundColor = 'black'
                document.getElementsByTagName('button').item(0).style.backgroundColor = 'black'
                document.getElementsByTagName('button').item(0).style.color = 'white'
                break
            case 'black':
                document.getElementsByTagName('body').item(0).style.backgroundColor = color.id
                document.getElementsByTagName('table').item(0).style.backgroundColor = 'white'
                document.getElementsByTagName('button').item(0).style.backgroundColor = 'white'
                document.getElementsByTagName('button').item(0).style.color = 'black'
                break
        }
        context.fillStyle = color.id
    }
}

clearButton.onclick = () => {
    context.fillStyle = 'white'
    context.fillRect(0, 0, frame.width, frame.height)
}

frame.addEventListener('mousemove', (mouse) => {
    switch (mouse.buttons) {
        case 1:
            context.fillRect(mouse.offsetX, mouse.offsetY, size, size)
            break        
    }
})