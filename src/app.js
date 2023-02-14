//importar nuestras dependencias 
import express, { urlencoded } from 'express'
import routerProducts from './routes/products.router.js'
import routerCarts from './routes/carts.router.js'

//instanciar nuestras constantes
const app = express()

// Defino el puerto de escucha del servidor
const PORT = 8081

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use('/api/products', routerProducts)
app.use('/api/carts', routerCarts)


const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Se ha producido el error ${error}`))