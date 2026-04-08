import express from "express"
import routerusers from "./modules/users/users.controller.js"

export const bootstrap = ()=>{
    const app = express()
    app.use(express.json())
    app.use(routerusers)
    app.listen(3000,()=>console.log("server is running on port 3000"))
}