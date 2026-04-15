import express from "express"
import  routes  from "./routes/routesApi.js"
import { morganUse, Port,corsUse } from "./config/config.js"
import { connectDB } from "./db/index.js"

const app =express()

app.set(Port)

app.use(corsUse)
app.use(express.json())
app.use(morganUse)
app.use(routes)


app.listen(Port, 
    async ()=>{
        await connectDB()
        console.log(`Servidor corriendo en el puerto ${Port}`)
    })