import React, { useState } from "react";
import torreImg from "../../img/Torre.png";
import "./Navigation.css";
import { FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";


export default function Navigation({getUserInfo}) {
    const [input, setInput]=useState("");
    function handleSubmit(e) {
        e.preventDefault();
        getUserInfo(input);
        setInput("");
    }
    function handleChange(e) {
        setInput(e.target.value);
    }
    return (<div id="nav-container">
        <img src={torreImg} alt="Torre logo" />
        <h1><b>torre</b><span id="span-co">.co</span></h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name-search" id="name-search" placeholder="Search for username" value={input} onChange={handleChange}/>
            <button type="submit">
                <IconContext.Provider value={{ color: "white" }}>
                    <FaSearch />
                </IconContext.Provider>
            </button>

        </form>
        <span id="span-sign">SIGN IN</span>
    </div>)
}