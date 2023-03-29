import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Preview from "./components/preview"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import SurveyForm from "./components/survey-form"
import List from "./components/Survey/List"
import SurveyList from "./components/survey-list"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Themes from "./components/theme/Theme";


export const ThemeContext = createContext()



function App() {

  const [themes, setThemes] = useState([])
  const [first, setFirst] = useState(0)
  const [data, setData] = useState([])
  const formdata = new FormData()
  const questionData = new FormData()

  const getData = () => {
    const token = sessionStorage.getItem('token')
    console.log(token)

    fetch("https://survey-form-example-8.onrender.com/createForm/list", {
      headers: { Authorization: token }
    })
      .then((res) => res.json())
      .then(data => setData(data.lists))

  }
  const value = { themes, setThemes, first, setFirst, formdata, questionData, getData, data, setData }

  return (
    <ThemeContext.Provider value={value}  >
      <div className="App">

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/main" element={<SurveyList />} />
            <Route path="/surveyForm" element={<List />} />
            <Route path="/preview" element={<Preview />} />
            <Route path='/Themes' element={<Themes />} />
            <Route path="/form" element={<SurveyForm />} />
            <Route path="/header" element={<Header />} />
            <Route path="/sidebar" element={<Sidebar />} />


          </Routes>
        </BrowserRouter>

      </div>
    </ThemeContext.Provider>

  );
}

export default App;
