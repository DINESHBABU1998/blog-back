const express=require("express")
const bollycontroller=require('../Details/Bollywood')

const bollyRouter = express.Router()
bollyRouter.route("/bolly")
.get(bollycontroller.apicontroller)
module.exports = bollyRouter

