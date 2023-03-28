import React, { useEffect, useState, useContext } from "react";
import '../Styles/Themes.css'
import CloseIcon from '@mui/icons-material/Close';
// import { ThemeContext } from "../App";
import { ThemeContext } from "../../App";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate,useLocation} from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import "../Styles/Thememodal.css"
// import useHistory from 'use-history'


const Themes = ({ opens, onClose }) => {
  const { themes, setThemes, first, setFirst , formdata ,questionData} = useContext(ThemeContext)
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()
  if (!opens) return null;
  // const history = useHistory();
  const [questions, setQuestions] = useState([{
    question: "",
    questionType: "radio",
    answer: ""
}])
const [option, setOptions] = useState([{
  options:[
      {optionText: "value"},
    {optionText: "value"},
    {optionText: "value"} ,
     {optionText: "value"}
  ]
}])

  const fetchtheme = async () => {
    await fetch("http://localhost:8080/api/themes")
      .then((res) => res.json())
      .then((data) => {

        setData(data.data)

      })
  }

  // function handleClick() {
  //   history.push('/main');
  // }


  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (!token) {
      navigate("/")
    }
    setThemes("Default")
  }, [])
  useEffect(() => {
    fetchtheme()

  }, [first])
  const handleTheme = async () => {

    if (!open) {
      setOpen(true)
    }
    else {
      setOpen(false)
    }

    if (first < data.length - 1) {
      setFirst(first + 1)
    }
    else {
      setFirst(0)
    }


  }
  const handleSave = () => {
       
    // let arr = []
    // for(let i=0;i<option.length;i++){
    //     console.log(option[i])
    //     arr.push(option[i].options)
    // }

    const token = sessionStorage.getItem("token")
    console.log("hii")
    // const id = location.state.id
    // questionData.append("surveyId" , id)
    // questionData.append("questions" , JSON.stringify(questions))
    // questionData.append("option",JSON.stringify(arr))
    // questionData.forEach((val, key) => {
    //     console.log(val, key)
    // })

    fetch("http://localhost:8080/createForm", {
        method: "POST",
        headers:{Authorization:token},
        body: questionData 
    }).then(res=>res.json())
    .then(data => {  navigate('/preview')})
}
  return (
    <div id="themebody"onClick={onClose} className='overlay'>
      <div id="box" onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
        <div id="settings">
          <h1>Theme Settings</h1>
          <span id="close" className={`cls-btn ${themes ? `cancel-${themes}` : null}`} onClick={() => {navigate("/form")}}><CloseIcon/></span>
          {/* <button className={`prev-btn ${themes ? `cancel-${themes}` : null}`} onClick={() => {navigate("/form")}}>cancel</button> */}
        </div>

        <div id="first"    >
          <p>Theme</p>

          <select className={`theme-btn trigger-button ${themes ? `theme-btn-${themes}` : null} dropdown-toggle `}
            // onClick={handleTheme}
            onChange={(e) => setThemes(e.target.value)}
          >
            {/* Change Theme <ArrowDropDownIcon/> */}
            {/* <option>Change Theme</option> */}
            <option>Default</option>
            <option>Dark</option>
            <option>pink</option>
          </select>
        </div>
        <div id="second">
          <div className="themename">
            <p>Theme Name</p>
            <select>
              <option>Select theme Name</option>
              <option>Theme 1</option>
              <option>Theme 2</option>
              <option>Theme 3</option>
            </select>
          </div>
          <div className="themetype">
            <p>Theme Type</p>
            <select>
              <option>Select theme type</option>
              <option>Survey</option>
            </select>
          </div>
          <div className="formtype">
            <p>Form Type</p>
            <select>
              <option>Select Form type</option>
              <option>One to One</option>
            </select>
          </div>
        </div>
        <div id="third">
          <div className="questions">
            <p>All Questions Mandatory</p>
            <select>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="skip">
            <p>Enable Skip</p>
            <select>
              <option>Select </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="option">
            <p>Option Type</p>
            <select>
              <option>Select </option>
              <option>Box</option>
            </select>
          </div>
        </div>
        <div id="fourth">
          <div className="fonts">
            <p>Font</p>
            <select>
              <option>Select </option>
              <option>Roboto</option>
            </select>
          </div>
          <div className="colours">
            <p>Colour</p>
            <select>
              <option>Select </option>
              <option>#</option>
            </select>
          </div>
        </div>
        <center>
          {/* <button className="cancel">Cancel</button> */}
          <button className={`prev-btn ${themes ? `cancel-${themes}` : null}`} onClick={() => {navigate("/form")}}>cancel</button>
          <button className={`prev-btn ${themes ? `save-${themes}` : null}`} onClick={() => {navigate("/form")}}>Save</button>
          {/* <button onClick={handleClick}>Save</button> */}
        </center>
      </div>
      <div>
        <div className="theme-div dropdown-wrapper " >

          {/* <select className={`theme-btn trigger-button ${themes ? `theme-btn-${themes}` : null} dropdown-toggle `}
            // onClick={handleTheme}
            onChange={(e) => setThemes(e.target.value)}
          >
            {/* Change Theme <ArrowDropDownIcon/> */}
            {/* <option>Change Theme</option> */}
            {/* <option>Default</option>
            <option>Dark</option>
            <option>pink</option>
          </select>  */}
          {/* <div className="dropdown" >
            <ul className={` ${open ? 'open' : null}`}>
              {data.map((theme, index) => {
                return (

                  <li key={index} onClick={() => {
                    setThemes(theme.name)
                    setOpen(false)
                  }} >{theme.name}</li>

                )
              })}
            </ul>
          </div> */}

        </div>
      </div>
    </div>
  );
};
export default Themes;







