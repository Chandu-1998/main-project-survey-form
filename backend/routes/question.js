const express = require("express")
const cors = require("cors")
const Question = require("../models/question")
const User = require('../models/user')
const fileUpload = require("express-fileupload")
const survey = require("../models/survey")
// const fileupload = require("express-fileupload"); 
const app = express()
app.use(express.json());
app.use(cors())
app.use(fileUpload())


app.post("/list",async(req,res) => {
    const {name , description,typeOfSurvey,startDate,endDate,image,otherCriteria} = req.body 
    const user = req.user
    const Lists = await survey.create({
        name , description,typeOfSurvey,startDate,endDate,image,otherCriteria,
        user
    })
    Lists.save()
    console.log(Lists)

    res.json({
        listId:Lists._id
    }) 
})
app.post("/questions" , async(req,res) => {
    // console.log(JSON.parse(req.body.questions))
    //console.log(req.body.options)
    
    // const questions = JSON.parse(req.body.questions) 
    // const option = JSON.parse(req.body.option) 
    //console.log(req.body) 
    // console.log(req.body.options)
    // console.log(questions) 
    // console.log(option)    
    //console.log(JSON.parse(req.body.options)) 
    const{questions,option} = req.body
    console.log(req.body)
   const data =  await Question.create({
        questions,   
        option
    })  
    data.save()
    console.log(data)
    res.json({ 
        status:"successful",  
        questId:data._id
    })  
   
})

module.exports = app 