import { createConnection } from 'mysql'

const eraseButton = document.getElementById('erase')

const database = createConnection({
    host: 'localhost',
    user: 'aaron',
    password: 'aaron12lol'
})

eraseButton.onclick = () => {
    database.query('DELETE ')
}