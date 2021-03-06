const express = require('express')
require('dotenv').config()
const routesFrontEnd = require('./next-routes/routesFrontEnd')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routesFrontEnd.getRequestHandler(app)

const serverExpress = () => {
    // Server express
    const server = express()

    // Extracted routes and middleware
    require('./router/routes')(server)

    // validation joi with objectid -> if needed
    //require('./validation/validation')();

    // mongoose connect -> if needed
    //require('./database/db')();

    // Next.js -> use routes
    return server.use(handle).listen(process.env.PORT || 3000)
}

// Next.js app if not test
process.env.NODE_ENV !== 'test' && 
app.prepare()
    .then( () => {
        serverExpress()
    })
    .catch((ex) => {
        console.error(ex.stack)
        //process.exit(1)
    })


// Export express server if process.env.NODE_ENV === 'test' -> testing with jest and supertest
process.env.NODE_ENV === 'test' && (module.exports = serverExpress)