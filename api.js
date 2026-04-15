import express from "express"
import  routes  from "./routes/routesApi.js"
import { morganUse, Port,corsUse } from "./config/config.js"

const app =express()

app.set(Port)

app.use(corsUse)
app.use(morganUse)
app.use(routes)


app.listen(Port, 
    ()=> console.log(`Servidor corriendo en el puerto ${Port}`));