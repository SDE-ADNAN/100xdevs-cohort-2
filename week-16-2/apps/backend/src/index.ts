import express from "express";
import {BACKENDURL} from "@repo/common/config"
const app =  express();

app.get('/',(req,res)=>{
    console.log(BACKENDURL)
    res.json({
        message:'hello world'
    })
})

app.listen(3000)