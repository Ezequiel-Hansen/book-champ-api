import {Book} from "../models/book.js"

export const getAll= async(req, res)=>{
    try {
        const result=await Book.findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const getOne= async(req, res)=>{
    try {
        const {id}=req.params
        const result= await Book.findByPk(id)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const create= async(req, res)=>{
    try {
        console.log(req.body)
        const {title, author, rating, pageCount, summary, imageUrl, available}= req.body
        const result=await Book.create({title, author, rating, pageCount, summary, imageUrl, available})
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const update= async(req, res)=>{
    try {
        const{id}=req.params
        const {title, author, rating, pageCount, summary, imageUrl, available}=req.body
        const result=await Book.findByPk(id).update({title, author, rating, pageCount, summary, imageUrl, available})
        await result.save();
        res.status(202).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const deleted= async(req, res)=>{
    try {
        const {id}=req.params
        const result=await Book.findByPk(id).destroy()
        res.status(204).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}