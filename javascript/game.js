const gameFrame = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))

class Player {
    context
    x

    constructor(params) {
        this.context = params.context
        this.x = params.position.x
        this.y = params.position.y
    }
}

class Ball {
    context
    x
    y

    constructor(params) {
        this.context = params.context
        this.x = params.position.x
        this.y = params.position.y
    }
}

const player = new Player({
    context: gameFrame.getContext('2d'),
    position: {
        x: parseInt(gameFrame.width / 2)
    }
})

console.log()

const balls = Array.of(
    new Ball({
        context: gameFrame.getContext('2d'),
        position: {
            x: Math.round(Math.random() * gameFrame.width),
            y: 0
        }
    }),
    new Ball({
        context: gameFrame.getContext('2d'),
        position: {
            x: Math.round(Math.random() * gameFrame.width),
            y: 0
        }
    }),
    new Ball({
        context: gameFrame.getContext('2d'),
        position: {
            x: Math.round(Math.random() * gameFrame.width),
            y: 0
        }
    }),
    new Ball({
        context: gameFrame.getContext('2d'),
        position: {
            x: Math.round(Math.random() * gameFrame.width),
            y: 0
        }
    })
)

function refreshFrame() {
    gameFrame.getContext('2d').fillStyle = 'black'
    gameFrame.getContext('2d').fillRect(0, 0, gameFrame.width, gameFrame.height)
}

function drawBalls() {
    for (const ball of balls) {
        ball.context.fillStyle = 'blue'
        ball.context.fillRect(ball.x, ball.y, 10, 10)
        
        if (ball.y < gameFrame.height)
            ball.y += 10
        else {
            ball.x = Math.round(Math.random() * gameFrame.width)
            ball.y = 0
        }
    }
}

function drawPlayer() {
    player.context.fillStyle = 'red'
    player.context.fillRect(player.x, gameFrame.height - 20, 10, 10)
}

/* Game Loop */
setInterval(()=> {
    refreshFrame()
    drawPlayer()
    drawBalls()
}, 50)

window.addEventListener('keypress', (keyEvent)=> {
    switch(keyEvent.key) {
        case 'a':
            if (player.x > 0)
                player.x -= 2   

            break
        case 'd':
            if (player.x < gameFrame.width - 10)    
                player.x += 2
            break
    }
})