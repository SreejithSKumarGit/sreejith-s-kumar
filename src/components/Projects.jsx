import styled from "styled-components";
import lumen5 from "../pics/lumen5.png";
import fabally from "../pics/fabally.png";
import  ProjectStyle from "./styles/Projects.module.css";
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
            </div>
        </div>
        </section>
    )

}
export default Projects; 