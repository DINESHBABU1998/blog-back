const express=require('express')
const foodcontroller=require('../Details/Food')

const foodRouter=express.Router()
foodRouter.route('/food')
.get(foodcontroller.apicontroller)
module.exports=foodRouter