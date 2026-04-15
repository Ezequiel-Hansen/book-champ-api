import cors from "cors"
import morgan from "morgan"
import 'dotenv/config'

export const morganUse= morgan("dev")

export const corsUse= cors({method:["POST","GET","PATCH","DELETE"]})

export const Port=process.env.PORT;

