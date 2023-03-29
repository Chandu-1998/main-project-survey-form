import React, { useContext, useState } from "react";
import "./Styles/sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
const navigate=useNavigate()
    const {themes,first} = useContext(ThemeContext)
    const [data,setData]=useState( <GroupsIcon  />) 
    function home(){
        navigate("/main")
    }
    function density(){
        navigate("/main")
    }
    return(
        <>
        <div className={`sidebar-container ${themes ? `sidebar-container-${themes}` : null}`} >
            <div className={`side-icon ${themes? `icon-${themes}`: null}`} >
            <div className={`prev-btn ${themes ? `HomeIcon-${themes}` : null}`} onClick={home}><HomeIcon/></div>
            </div>
            <div className={`side-icon ${themes? `icon-${themes}`: null}`} >
            <div className={`prev-btn1 ${themes ? `HomeIcon-${themes}` : null}`} onClick={density}><GroupsIcon  /></div>
            </div>
            <div className={`side-icon ${themes? `icon-${themes}`: null}`} >
             <div className={`prev-btn ${themes ? `HomeIcon-${themes}` : null}`} onClick={density}><DensitySmallIcon /></div>
            </div>
        </div>
        </>
    )
}
export default Sidebar;
