const express=require('express')
const fitnesscontroller=require('../Details/Fitness')

const fitnessRouter=express.Router()
fitnessRouter.route('/fitness')
.get(fitnesscontroller.apicontroller)
module.exports=fitnessRouter