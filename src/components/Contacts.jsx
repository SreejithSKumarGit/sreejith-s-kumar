import React from "react";
import githubicon from "../pics/githubicon.png"
import email from "../pics/email.png";
import linkedin from "../pics/linkedinicon.png";
import phone from "../pics/smartphone-call.png";
import ContactStyle from "./styles/Contacts.module.css";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Tooltip } from '@chakra-ui/react'


function Contacts()
{
    const bounceAnimation = keyframes`${fadeIn}`;
    const [show1,setshow1]=React.useState(false);
    const [show2,setshow2]=React.useState(false);

    const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};`;

    const Img=styled.img`
    width:40px;
    margin:20px;
    src:${(props)=>(props.src)};
    `
    return (
        <section id="contacts">
        <div className={ContactStyle.contactContainer}>
            <h1 className={ContactStyle.title}>Contacts</h1>
            <h1 className={ContactStyle.heading}>Lets Work Together ! </h1>
            <h3 className={ContactStyle.para}>One of my favorite things about developing web application
                is the variety in projects. So if you want to collaborate 
                or have some work for me, get in touch and tell me what you have 
                in mind. I can't wait to hear all about it 
            </h3>
            <div className={ContactStyle.iconContainer}>
                <button  onClick={()=>setshow1(!show1)}>
                    <div className={ContactStyle.toggleBtn}>
                        <Img src={email}/>
                        <h3 className={ContactStyle.toggleText} >{show1?"sreejithskumar80@gmail.com":""}</h3>
                    </div>
                </button>
                <a href="https://www.linkedin.com/in/sreejith-s-kumar-5256b216b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVHo8Yw%2FtQyeXe1PzKMTGxA%3D%3D" target="_blank" rel="noreferrer"><Img src={linkedin}/></a> 
                <a href="https://github.com/SreejithSKumarGit" target="_blank" rel="noreferrer"><Img src={githubicon}/></a>  
                <button  onClick={()=>setshow2(!show2)}>
                    <div className={ContactStyle.toggleBtn}>
                        <Img src={phone} alt="9495458816"/>
                        <h3 className={ContactStyle.toggleText} >{show2?"+91-9495458816":""}</h3>
                    </div>
                </button>
                
            </div>
        </div>
        </section>
    )
}
export default Contacts;