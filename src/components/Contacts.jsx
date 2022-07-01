
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

    const BouncyDiv = styled.div`
    animation: 3s ${bounceAnimation};`;

    const Img=styled.img`
    width:40px;
    margin:20px;
    src:${(props)=>(props.src)};
    `
    return (
        <section id="contacts">
        <BouncyDiv className={ContactStyle.contactContainer}>
            <h1 className={ContactStyle.title}>Contacts</h1>
            <h1 className={ContactStyle.heading}>Lets Work Together ! </h1>
            <h3 className={ContactStyle.para}>One of my favorite things about developing web application
                is the variety in projects. So if you want to collaborate 
                or have some work for me, get in touch and tell me what you have 
                in mind. I can't wait to hear all about it 
            </h3>
            <div className={ContactStyle.iconContainer}>
                <a href="https://www.sreejithskumar80@gmail.com" target="_blank" rel="noreferrer"><Img src={email} /></a>
                <a href="https://www.linkedin.com/in/sreejith-s-kumar-5256b216b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVHo8Yw%2FtQyeXe1PzKMTGxA%3D%3D" target="_blank" rel="noreferrer"><Img src={linkedin}/></a> 
                <a href="https://github.com/SreejithSKumarGit" target="_blank" rel="noreferrer"><Img src={githubicon}/></a>  
                <Tooltip label="+919495458816"><Img src={phone} alt="9495458816"/></Tooltip>
            </div>
        </BouncyDiv>
        </section>
    )
}
export default Contacts;