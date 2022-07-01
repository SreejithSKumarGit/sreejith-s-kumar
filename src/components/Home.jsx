import React from "react";
import HomeStyles from "./styles/Home.module.css";
import Sreejith from "../pics/Sreejith (2).jpg";
import {Button} from "@chakra-ui/react";


import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
function Home()
{
    const bounceAnimation = keyframes`${fadeIn}`;

    const BouncyDiv = styled.div`
    animation: 3s ${bounceAnimation};`;
    
    return(
        <section id="home">
        <BouncyDiv className={HomeStyles.HomeContainer}>
            
            <div className={HomeStyles.ContentContainer}>
                    <h1 className={HomeStyles.Hello}>Hello </h1>
                    <h1 className={HomeStyles.Hello}>I am <span className={HomeStyles.Name}>Sreejith S Kumar</span> </h1>
                    <div className={HomeStyles.title}>
                        <div className={HomeStyles.titleWrapper}>
                            <h1 className={HomeStyles.sliderData}>MERN Developer</h1>
                            <h1 className={HomeStyles.sliderData}>UI/UX  Designer</h1>
                            <h1 className={HomeStyles.sliderData}>Full stack Developer</h1>
                            <h1 className={HomeStyles.sliderData}>Front End Developer</h1>
                        </div>
                    </div>
                    <Button width="150px" size="lg" bg="#FF1700" mt="10px"><a style={{textDecoration:"none", color:"whitesmoke"}} href="https://drive.google.com/file/d/1jmq8K1caktHCckGHsUkEsBUdjOOlbstw/view?usp=sharing">Resume</a></Button>
            </div>
            <div className={HomeStyles.ImageContainer}>
                <img className={HomeStyles.Image} src={Sreejith} alt="Sreejith"  />
            </div>
        </BouncyDiv>
        </section>
    )
}

export default Home;



