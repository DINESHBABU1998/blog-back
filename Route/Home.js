const express=require('express')
const homecontroller=require('../Details/Home')

const homeRouter=express.Router()
homeRouter.route('/home')
.get(homecontroller.apicontroller)
module.exports=homeRouter

