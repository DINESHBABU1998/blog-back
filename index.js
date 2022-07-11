const express=require('express')
const bollyRouter = require('./Route/Bollywood')
const fitnessRouter=require('./Route/Fitness')
const foodRouter=require('./Route/Food')
const technologyRouter=require('./Route/Technology')
const hollywoodRouter = require('./Route/Hollywood')
const homeRouter = require('./Route/Home')

const cors=require("cors")

const app=express()

app.use(cors())
app.use('/api',bollyRouter)
app.use('/api',fitnessRouter)
app.use('/api',foodRouter)
app.use('/api',technologyRouter)
app.use('/api',hollywoodRouter)
app.use('/api',homeRouter)

app.listen(process.env.PORT||7000,()=>{
    console.log("App is running");
})

