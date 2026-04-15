import cors from "cors"
import morgan from "morgan"
import {loadEnvFile} from "node:process"

loadEnvFile(".env")

export const morganUse= morgan("dev")

export const corsUse= cors({method:["POST","GET","PUT","DELETE"]})

export const Port=process.env.PORT || 3000;

