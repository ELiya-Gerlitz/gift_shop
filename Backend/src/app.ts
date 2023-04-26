import express from "express"
import cors from "cors"
import appConfig from "./2-Utils/AppConfig";
import giftController from "./6-Controllers/gift-controller";


const server= express()

server.use(cors()); // Allow any site to access our backend
// server.use(cors({ origin: "http://localhost:3000" })); // Allow only this site to access our backend
// server.use(cors({ origin: ["http://localhost:3000", "http://some-other.com"] })); // Allow only those sites to access our backend
server.use(express.json())

server.use("/api", giftController)




server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))
console.log("I am app")




