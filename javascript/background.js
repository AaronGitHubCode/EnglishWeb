import Ball from '../typescript/ball'

const background    = /** @type {HTMLCanvasElement} */ (document.getElementById('background'))

const balls       = [
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    }),
    new Ball({
        context : background.getContext('2d'),
        pos : {
            x: Math.random() * window.outerWidth,
            y: Math.random() * window.outerHeight
        }
    })
]

const velocity  = 10
const size      = 20

setInterval(() => {
    background.width    = window.outerWidth
    background.height   = window.outerHeight

    for (const ball of balls ) {
        console.log(ball.x)

        ball.context.fillStyle = 'black'
        ball.context.fillRect(0, 0, background.width, background.height)
    }

    for (const ball of balls) {
        ball.context.fillStyle = 'white'
        ball.context.fillRect(ball.x, ball.y, size, size)

        if (! ball.left) {
            ball.x -= velocity
    
            if (parseInt(ball.x) < 0) {
                ball.left = true
    
                ball.x += velocity
            }
        }else {
            ball.x += velocity
    
            if (parseInt(ball.x) > background.width - 10) {
                ball.left = false
    
                ball.x -= velocity
            }
        }
    
        if (! ball.up) {
            ball.y -= velocity
    
            if (parseInt(ball.y) < 0) {
                ball.up = true
    
                ball.y += velocity
            }
        }else {
            ball.y += velocity
    
            if (parseInt(ball.y) > background.height - 10) {
                ball.up = false
    
                ball.y -= velocity
            }
        }
    }
}, 50)