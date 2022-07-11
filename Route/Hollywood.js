const express=require('express')
const hollywoodcontroller=require('../Details/hollywood')

const hollywoodRouter=express.Router()
hollywoodRouter.route('/hollywood')
.get(hollywoodcontroller.apicontroller)
module.exports=hollywoodRouter