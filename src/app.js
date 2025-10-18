import express from 'express'

const app = express();


app.get('/',(reqq,res)=>{
    res.status(200).send('Hello from app.js')
})


export default app