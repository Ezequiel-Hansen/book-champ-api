import  Router  from "express";
import { getAll, getOne, update, deleted, create } from "../controllers/booksController.js";

const routes=Router()

routes
    .get("/all",getAll)
    .post("/create",create)
    .get("/book/:id",getOne)
    .put("/update/:id",update)
    .delete("/deleteBook/:id",deleted)

export default routes