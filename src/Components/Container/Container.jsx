import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Container.css";
import photoframe from "../../img/photo frame.png";

export default function Container() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        img: "g",
        strenghts: {
        }
    });
    async function getUserInfo(user) {
        try {
            let info = await fetch('');
            setUserInfo(info);
        } catch (error) {
            alert("No se ha encontrado al usuario", error);
        }
    }
    return (<div id="cont-container">
        <Navigation getUserInfo={getUserInfo} />
        {userInfo.name && <div id="user-info-cont">
            <div id="photo-container">
                <img src={userInfo.img} alt="profile picture" />
                <img id="photo-frame" src={photoframe} alt="picture frame" />
            </div>
            <h2>{userInfo.name}</h2>
        </div>}
        {userInfo.name && <p id="section-title">Skills and interests:</p>}
        <div id="user-interest-cont">
            {userInfo.strenghts.master && <div id="skill-master">
                <p className="skill-experience-title">
                    <svg className="level-icon" viewBox="0 0 24 24"><path d="M16 1.2C15 1.2 14.2 2 14.2 3S15 4.8 16 4.8 17.8 4 17.8 3 17 1.2 16 1.2M12.4 4.1C11.93 4.1 11.5 4.29 11.2 4.6L7.5 8.29C7.19 8.6 7 9 7 9.5C7 10.13 7.33 10.66 7.85 10.97L11.2 13V18H13V11.5L10.75 9.85L13.07 7.5L14.8 10H19V8.2H15.8L13.86 4.93C13.57 4.43 13 4.1 12.4 4.1M10 3H3C2.45 3 2 2.55 2 2S2.45 1 3 1H12.79C12.58 1.34 12.41 1.71 12.32 2.11C11.46 2.13 10.65 2.45 10 3M5 12C2.24 12 0 14.24 0 17S2.24 22 5 22 10 19.76 10 17 7.76 12 5 12M5 20.5C3.07 20.5 1.5 18.93 1.5 17S3.07 13.5 5 13.5 8.5 15.07 8.5 17 6.93 20.5 5 20.5M19 12C16.24 12 14 14.24 14 17S16.24 22 19 22 24 19.76 24 17 21.76 12 19 12M19 20.5C17.07 20.5 15.5 18.93 15.5 17S17.07 13.5 19 13.5 22.5 15.07 22.5 17 20.93 20.5 19 20.5M5.32 11H1C.448 11 0 10.55 0 10S.448 9 1 9H5.05C5.03 9.16 5 9.33 5 9.5C5 10.03 5.12 10.54 5.32 11M6 7H2C1.45 7 1 6.55 1 6S1.45 5 2 5H7.97L6.09 6.87C6.05 6.91 6 6.96 6 7Z"></path></svg>
                    <span className="skill-title">Master</span>
                </p>
                {userInfo.strenghts.length && userInfo.strenghts.map(strenght => <span id="strenght">{strenght.name}</span>)}

            </div>}
            {userInfo.strenghts.expert && <div id="skill-expert">
                <p className="skill-experience-title">
                    <svg className="level-icon" viewBox="0 0 24 24"><path d="M16.5,5.5A2,2 0 0,0 18.5,3.5A2,2 0 0,0 16.5,1.5A2,2 0 0,0 14.5,3.5A2,2 0 0,0 16.5,5.5M12.9,19.4L13.9,15L16,17V23H18V15.5L15.9,13.5L16.5,10.5C17.89,12.09 19.89,13 22,13V11C20.24,11.03 18.6,10.11 17.7,8.6L16.7,7C16.34,6.4 15.7,6 15,6C14.7,6 14.5,6.1 14.2,6.1L9,8.3V13H11V9.6L12.8,8.9L11.2,17L6.3,16L5.9,18L12.9,19.4M4,9A1,1 0 0,1 3,8A1,1 0 0,1 4,7H7V9H4M5,5A1,1 0 0,1 4,4A1,1 0 0,1 5,3H10V5H5M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H7V13H3Z"></path></svg>
                    <span className="skill-title">Expert</span>
                </p>
                {userInfo.strenghts.length && userInfo.strenghts.map(strenght => <span id="strenght">{strenght.name}</span>)}
            </div>}
            {userInfo.strenghts.proeficient && <div id="skill-proeficient">
                <p className="skill-experience-title">
                    <svg className="level-icon" viewBox="0 0 24 24"><path d="M16 1.2C15 1.2 14.2 2 14.2 3S15 4.8 16 4.8 17.8 4 17.8 3 17 1.2 16 1.2M12.4 4.1C11.93 4.1 11.5 4.29 11.2 4.6L7.5 8.29C7.19 8.6 7 9 7 9.5C7 10.13 7.33 10.66 7.85 10.97L11.2 13V18H13V11.5L10.75 9.85L13.07 7.5L14.8 10H19V8.2H15.8L13.86 4.93C13.57 4.43 13 4.1 12.4 4.1M10 3H3C2.45 3 2 2.55 2 2S2.45 1 3 1H12.79C12.58 1.34 12.41 1.71 12.32 2.11C11.46 2.13 10.65 2.45 10 3M5 12C2.24 12 0 14.24 0 17S2.24 22 5 22 10 19.76 10 17 7.76 12 5 12M5 20.5C3.07 20.5 1.5 18.93 1.5 17S3.07 13.5 5 13.5 8.5 15.07 8.5 17 6.93 20.5 5 20.5M19 12C16.24 12 14 14.24 14 17S16.24 22 19 22 24 19.76 24 17 21.76 12 19 12M19 20.5C17.07 20.5 15.5 18.93 15.5 17S17.07 13.5 19 13.5 22.5 15.07 22.5 17 20.93 20.5 19 20.5M5.32 11H1C.448 11 0 10.55 0 10S.448 9 1 9H5.05C5.03 9.16 5 9.33 5 9.5C5 10.03 5.12 10.54 5.32 11M6 7H2C1.45 7 1 6.55 1 6S1.45 5 2 5H7.97L6.09 6.87C6.05 6.91 6 6.96 6 7Z"></path></svg>
                    <span className="skill-title">Proeficient</span>
                </p>
                {userInfo.strenghts.length && userInfo.strenghts.map(strenght => <span id="strenght">{strenght.name}</span>)}
            </div>}
            {userInfo.strenghts.interested && <div id="skill-interested">
                <p className="skill-experience-title">
                    <svg className="level-icon" viewBox="0 0 24 24"><path d="M18.5,4A2.5,2.5 0 0,1 21,6.5A2.5,2.5 0 0,1 18.5,9A2.5,2.5 0 0,1 16,6.5A2.5,2.5 0 0,1 18.5,4M4.5,20A1.5,1.5 0 0,1 3,18.5A1.5,1.5 0 0,1 4.5,17H11.5A1.5,1.5 0 0,1 13,18.5A1.5,1.5 0 0,1 11.5,20H4.5M16.09,19L14.69,15H11L6.75,10.75C6.75,10.75 9,8.25 12.5,8.25C15.5,8.25 15.85,9.25 16.06,9.87L18.92,18C19.2,18.78 18.78,19.64 18,19.92C17.22,20.19 16.36,19.78 16.09,19Z"></path></svg>
                    <span className="skill-title">No experience, but interested</span>
                </p>
                {userInfo.strenghts.length && userInfo.strenghts.map(strenght => <span id="strenght">{strenght.name}</span>)}
            </div>}
        </div>
    </div>);
}
