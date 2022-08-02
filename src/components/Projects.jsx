import styled from "styled-components";
import lumen5 from "../pics/lumen5.png";
import fabally from "../pics/fabally.png";
import sephora from "../pics/Sephora Clone.png"
import  ProjectStyle from "./styles/Projects.module.css";
import movieCredits from "../pics/Movie Credits.png";
import translate from "../pics/Translate App.png";
function Projects()
{
    const Img=styled.img`
    width:100%;
    src:${(props)=>(props.src)}
    `
    return(
        <section id="projects">
        <div className={ProjectStyle.projectContainer}>
        <h1 className={ProjectStyle.heading}>Projects</h1>
            <div className={ProjectStyle.projectsContainer}>
                    <div>
                        <Img src={lumen5}/>
                        <h4 className={ProjectStyle.projectTitle}>Vrbo Clone</h4>
                        <p className={ProjectStyle.ProjectContent}>Vrbo is a website which lets you search and book the perfect place to stay for you next vacation. A collaborative project built by 4 members in 7 days. </p>
                        <h3 className={ProjectStyle.ProjectContent}> Tech-Stack: ReactJS | MongoDB | Express JS | Node JS | Chakra UI | Styled Components | </h3>
                        <div className={ProjectStyle.Btncontainer}>
                        <a href="https://github.com/SreejithSKumarGit/Vrbo"target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Repo Link</button></a> 
                        <a href="https://sreejithskumargit.github.io/Lumen5-Video-Maker-Clone/" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Live website</button></a> 
                        </div>
                    </div>
                    <div >
                        <Img src={sephora}/>
                        <h4 className={ProjectStyle.projectTitle}>Sephora Clone</h4>
                        <p className={ProjectStyle.ProjectContent}>Sephora is an online shopping platform for personal care and beauty products. Featuring nearly 340 brands, along with its own private label.
                        A collaborative project built by 5 members in 7Days.</p>
                        <h3 className={ProjectStyle.ProjectContent}> Tech-Stack: React JS | JSON Server | Chakra UI |  Styled Components |</h3>
                        <div className={ProjectStyle.Btncontainer}>
                            <a href="https://github.com/SreejithSKumarGit/sephora-clone" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Repo Link</button></a> 
                            <a href="https://sephora-clone-qq6okys6c-shiwam-c114.vercel.app/" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Live Website</button></a> 
                        </div> 
                    </div>
                    <div >
                        <Img src={fabally}/>
                        <h4 className={ProjectStyle.projectTitle}>Faballey Clone</h4>
                        <p className={ProjectStyle.ProjectContent}>Faballey is an e-commerce website where people can buy from wide range of Womens Cloths and has an interactive UI. A collaborative project built by a team of 6 executed in 7 days.</p>
                        <h3 className={ProjectStyle.ProjectContent}> Tech-Stack: HTML | CSS | JavaScript |  JSON Server </h3>
                        <div className={ProjectStyle.Btncontainer}>
                            <a href="https://github.com/Venkateshkp/faballey-clone/tree/main" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Repo Link</button></a> 
                            <a href="https://courageous-dasik-c6eb7e.netlify.app/" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Live Website</button></a> 
                        </div> 
                    </div>
                    <div>
                        <Img src={lumen5}/>
                        <h4 className={ProjectStyle.projectTitle}>Lumen 5 Clone</h4>
                        <p className={ProjectStyle.ProjectContent}>Lumen5 is a video creation platform designed for brands and
                        businesses to produce engaging video content for social posts, stories,
                        and ads.A collaborated project by 5 members done in 6 days.</p>
                        <h3 className={ProjectStyle.ProjectContent}> Tech-Stack: HTML | CSS | JavaScript </h3>
                        <div className={ProjectStyle.Btncontainer}>
                        <a href="https://github.com/SreejithSKumarGit/Lumen5-Video-Maker-Clone/"target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Repo Link</button></a> 
                        <a href="https://sreejithskumargit.github.io/Lumen5-Video-Maker-Clone/" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Live website</button></a> 
                        </div>
                    </div>
                    
                    <div>
                        <Img src={movieCredits}/>
                        <h4 className={ProjectStyle.projectTitle}>Movie Credits App</h4>
                        <p className={ProjectStyle.ProjectContent}>Movie Credits App is a website which shows details and all the people working in front and behind your desired movie.
                        Its an individual Project created in 5days.</p>
                        <h3 className={ProjectStyle.ProjectContent}> Tech-Stack: HTML | CSS | JavaScript </h3>
                        <div className={ProjectStyle.Btncontainer}>
                        <a href="https://github.com/SreejithSKumarGit/Movie-Credits-App"target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Repo Link</button></a> 
                        <a href="https://sreejithskumargit.github.io/Movie-Credits-App/" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Live website</button></a> 
                        </div>
                    </div>
                    <div >
                        <Img src={translate}/>
                        <h4 className={ProjectStyle.projectTitle}>Translate App</h4>
                        <p className={ProjectStyle.ProjectContent}>As the name says its a translating web application to translate any sentence from one language to another.
                            It is an individual project created in 3 days.</p>
                        <h3 className={ProjectStyle.ProjectContent}> Tech-Stack: HTML | CSS | JavaScript | </h3>
                        <div className={ProjectStyle.Btncontainer}>
                            <a href="https://github.com/SreejithSKumarGit/Translate-App" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Repo Link</button></a> 
                            <a href="https://sreejithskumargit.github.io/Translate-App/" target="_blank" rel="noreferrer"><button className={ProjectStyle.Repobtn}>Live Website</button></a> 
                        </div> 
                    </div>
            </div>
        </div>
        </section>
    )

}
export default Projects; 