import React, { useState } from "react";
import Navigation from "../Navigation/Navigation"

export default function Container() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        img: "",
        strenghts: []
    });
    async function getUserInfo(user) {
        try {
            // let info = await fetch(`https://www.bio.torre.co/api/${user}`)
    } catch (error) {
        // alert("No se ha encontrado al usuario", error);
    }
}
getUserInfo("cars")
return (<div id="cont-container">
    <Navigation getUserInfo={getUserInfo}/>
    <div id="user-info-cont">
        <img src="" alt="" />
        <h2></h2>
    </div>
    <div id="user-interest-cont">

    </div>
</div>);
}