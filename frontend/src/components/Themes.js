import React, { useEffect, useState } from "react";
import '../components/styles/Themes.css'
import CloseIcon from '@mui/icons-material/Close';
const Themes = () => {
    const [color,setColor]= useState('Dark')
    useEffect(()=>{
        setColor('Dark')
    },[color])
  return (
    <div id="box">
      <div id="settings">
        <h1>Theme Settings</h1>
        <span id="close"><CloseIcon/></span>
      </div>

      <div  id="first"    >
        <p>Theme</p>
        <select id="fSelect" className="theme-btn" onChange={(e)=>{setColor(e.target.value)}}>
          <option>Select theme </option>
          <option>Default</option> 
          <option>Dark</option>
          <option>Pink</option>
          <option>Red</option>
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
        <button className="cancel">Cancel</button>
        <button className="save">Save</button>
      </center>
    </div>
  );
};

export default Themes;
