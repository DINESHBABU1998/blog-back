const express=require('express')
const technologycontroller=require('../Details/Technology')

const technologyRouter=express.Router()
technologyRouter.route('/technology')
.get(technologycontroller.apicontroller)
module.exports=technologyRouter