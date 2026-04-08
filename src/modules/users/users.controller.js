import { Router } from "express";
import {addUser,updateUser,deleteUser,getUser,getAll,filterByAge,findById} from "./users.service.js"

const router =Router()

router.post("/user",(req,res)=>{
    const {name,age,email} = req.body
    let response = addUser(name,age,email)
    res.json({message:response})
})
router.patch("/user/:id",(req,res)=>{
    const {id} = req.params
    const {name,email,age} = req.body
    let response = updateUser(name,age,email,id)
    res.json({message:response})
})
router.delete("/user{/:id}",(req,res)=>{
    const {id} = req.body || req.params
    let response = deleteUser(id)
    res.json({message:response})
})
router.get("/user/getByName",(req,res)=>{
    let {name} = req.query
    let response = getUser(name)
    res.json(response)
})
router.get("/user",(req,res)=>{
    const answer = getAll()
    res.json(answer)
})
router.get("/user/filter",(req,res)=>{
    const {minAge} = req.query
    const filtered = filterByAge(minAge)
    res.json(filtered)
})
router.get("/user/:id",(req,res)=>{
    const {id} = req.params
    const targeted = findById(id)
    res.json(targeted)
})

export default router