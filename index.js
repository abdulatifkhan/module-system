const express = require("express")

const routerA = express.Router()
const routerB = express.Router()

const app = express()

routerA.get("/", (_, res) => res.send("Module A Home"))

routerA.get("/list", (_, res) => res.send("Module A List"))

routerB.get("/", (_, res) => res.send("Module B Home"))

routerB.get("/list", (_, res) => res.send("Module B List"))

app.use("/a", routerA)
app.use("/b", routerB)

app.listen(4009)