import {loadEnvFile} from "node:process"
import { Sequelize } from 'sequelize'

loadEnvFile(".env")

export const sequelize= new Sequelize({
    dialect: 'sqlite',
    storage: './db/books.db'
})