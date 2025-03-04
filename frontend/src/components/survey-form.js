import React, { useState,useEffect } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate,useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "../components/styles/form.css"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Theme from "./theme/Theme"
import SettingsIcon from '@mui/icons-material/Settings';


const SurveyForm = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { themes, formdata ,questionData } = useContext(ThemeContext)
    const [status,setStatus] = useState("")
    const [questions, setQuestions] = useState([{
        question: "",
        questionType: "radio",
        answer: ""
    }])
    useEffect(() => {
        if (status === 'Success') {
            alert("success")
            navigate('/theme')
            return}})
    formdata.forEach((val, key) => {
        console.log(val, key)
    })
    questionData.forEach((val,key) => {
        console.log(val,key)
    })
    const [option, setOptions] = useState([{
        options:[
            {optionText: "value"},
          {optionText: "value"},
          {optionText: "value"} ,
           {optionText: "value"}
        ]
    }
        
   

])

    const handleChange = (text, i) => {
        let newques = [...questions];
        newques[i].question = text;
        setQuestions(newques)
        console.log(newques)

    }

    const addType = (type, i) => {
        console.log(type)
        let ques = [...questions]
        ques[i].questionType = type
        setQuestions(ques)
        console.log(ques)
    }

    const handleOption = (text, i, j) => {
        console.log(text)
        console.log(i)
        console.log(j)
        let opt = [...option]
        opt[i].options[j].optionText = text;
        setOptions(opt)
        console.log(opt)

    }

    const removeOption = (i, j) => {

        let remove = [...option]
        console.log(remove)
        if ((remove[i].options).length > 1) {
     
            (remove[i].options).splice(j, 1)
        
            setQuestions(remove)
       
        }
    }

    const addOption = (i) => {
        let add = [...questions]
        if (add[i].options.length < 4) {
            add[i].options.push({ optionText: "option" + (parseInt(add[i].options.length) + 1) })
            setQuestions((add))
        }
    }

    const addAnswer = (ans, i) => {
        let answe = [...questions]

        answe[i].answer = ans
        setQuestions(answe)

    }

    const handleSave = () => {
       
        let arr = []
        for(let i=0;i<option.length;i++){
            console.log(option[i])
            arr.push(option[i].options)
        }

        const token = sessionStorage.getItem("token")
        console.log("hii")
        const id = location.state.id
        questionData.append("surveyId" , id)
        questionData.append("questions" , JSON.stringify(questions))
        questionData.append("option",JSON.stringify(arr))
        questionData.forEach((val, key) => {
            console.log(val, key)
        })

        fetch("https://survey-form-example-8.onrender.com/createForm", {
            method: "POST",
            headers:{Authorization:token},
            body: questionData 
        }).then(res=>res.json())
        .then(data => {  navigate('/main')})
    }

    const handlePreview = () => {
        for(let i=0;i<questions.length;i++){
            if(questions[i].question === "" || questions[i].answer == ""){
                alert('Please enter question and select a answer')
                return
            }
        }
        let arr = []
        for(let i=0;i<option.length;i++){
        
            arr.push(option[i].options)
        }
        const id = location.state.id
        let question = { id,questions,arr }
        navigate('/preview' , {state:{data:question}})
    }
    const addQuestion = () => {

        setQuestions([...questions, {
            question: "",
            questionType: "radio",
            answer: ""
        }])

        setOptions(
            [...option,
            { options:[
                {optionText: "value"},
              {optionText: "value"},
              {optionText: "value"} ,
               {optionText: "value"}
            ]
            }     
        ])
    }
    return (
        <>
        <Header/>
        <Sidebar/>
            <div className={`form-container form-container-${themes}`} >
                <div className="preview-con" >
                    <div className={`preview-div preview-div-${themes}`} >
                        <ArrowBackIcon onClick={() => { navigate("/surveyForm") }} />
                        <h3 >Create Question</h3>
                    </div>
                    <div>
                    <button className="set"><Link to ={"/Themes"} className="set-two" ><span className="set-btn"><SettingsIcon/></span><span className="set-one">Theme settings</span></Link> </button>
                       <a href ="/preview"> <button className={`prev-btn ${themes ? `close-${themes}` : null}`} onClick={handlePreview} >Preview</button></a>
                       <Link to ="/main"> <button className={`prev-btn ${themes ? `save-${themes}` : null}`} onClick={handleSave}  >Save</button></Link>
                        
                    </div>
                </div>
                <div className={`question-con`} >
                    <div className={`question-box`} >
                        {questions.map((question, index) => (
                            <div key={index} className="main">
                                <div className="ques-index" >
                                    <h4 className="index" >Q{index + 1}</h4>
                                    <p className="index" >Question</p>
                                </div>
                                <div className="question-div" >
                                    <div>
                                        <input className="ques" onChange={(e) => { handleChange(e.target.value, index) }}
                                           
                                            id="quein" type="text" placeholder="Enter Question" />
                                   
                                        <div id="radio">
                                            {

                                                (option[index].options).map((opp, j) => {
                                                    return (
                                                        <div className="option" key={j} >
                                                            <input type={question.questionType} value={opp.optionText} key={j} 
                                                            onChange={() => { addAnswer(opp.optionText, index) }}
                                                                label={opp.optionText} name={question.question} />
                                                            <input className="option-input" type="text"
                                                                onChange={(e) => handleOption(e.target.value, index, j)}
                                                                value={opp.optionText} />
                                                            <RemoveCircleOutlineIcon style={{ color: "red", width: "15px" }} onClick={() => { removeOption(index, j) }} />
                                                            <AddCircleOutlineIcon style={{ color: "blue", width: "15px" }} onClick={() => { addOption(index) }} />
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div id="quetype">
                                        <h6 style={{ margin: "0px" }} >Question Type</h6>
                                        <select className="selectque" onChange={(e) => addType(e.target.value, index)} >
                                            <option placeholder="value" value="radio" >Radio type</option>
                                            <option value="checkbox">Checkbox</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={addQuestion} className="add-btn" >Add question</button>

                </div>
            </div>
        </>
    )
}

export default SurveyForm
