import AboutStyles from "./styles/About.module.css"; 
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
function About()
{
  const bounceAnimation = keyframes`${fadeIn}`;

  const BouncyDiv = styled.div`
  animation: 3s ${bounceAnimation};`;  
    
    return (
      <section id="about">
        <BouncyDiv className={AboutStyles.AboutContainer} >
          <h1 className={AboutStyles.Heading} style={{}}>About</h1>
          <div className={AboutStyles.ContentContainer} >
              <h3 className={AboutStyles.Content}>A self-motivated IT professional with knowledge and proficiency in
              JavaScript, HTML, CSS, React and mobile responsive web
              development, as well as strong skills and ability in writing clean and
              efficient code. Looking forward to work for a reputed company as
              a Software Development Engineer.</h3>
          </div>
        </BouncyDiv>
      </section>
    )
    
}

export default About;