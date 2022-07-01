import React from "react";
import html from "../pics/html.png";
import css from "../pics/css.png";
import js from "../pics/js.png";
import react from "../pics/React.png";
import redux from "../pics/Redux.png";
import mongo from "../pics/MongoDB.png";
import git from "../pics/Git.png";
import netlify from "../pics/netlify.png";
import vscode from "../pics/vscode.png";
import node from "../pics/node.png";
import express from "../pics/expressjs.png";
import postman from "../pics/postman.png";

import SkillsStyles from "./styles/Skills.module.css" ;

function Skills()
{   
    
    return(
        <section id="skills">
            <div className={SkillsStyles.Container} >
            <h1 className={SkillsStyles.Heading} >SKILLS</h1>
                <div className={SkillsStyles.skillsDiv}>
                    <div className={SkillsStyles.FrontDivContainer}>
                        <div className={SkillsStyles.skillsWithTitle}>
                            <h3 className={SkillsStyles.SectionTitle}>Front End Skills</h3>
                            <div className={SkillsStyles.FrontendskillItems} >
                                <div className={SkillsStyles.SkillContainer}>
                                    <img className={SkillsStyles.Image} src={html} alt="html" />
                                    <h6 className={SkillsStyles.Skills}>HTML</h6>
                                </div>
                                <div className={SkillsStyles.SkillContainer}>
                                    <img  className={SkillsStyles.Image} src={css} alt="css" />     
                                    <h6 className={SkillsStyles.Skills}>CSS</h6>
                                </div>
                                <div className={SkillsStyles.SkillContainer}>
                                    <img className={SkillsStyles.Image} src={js} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>JavaScript</h6>
                                </div>
                                <div className={SkillsStyles.SkillContainer}>
                                    <img className={SkillsStyles.Image} src={react} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>React</h6>
                                </div>
                                <div className={SkillsStyles.SkillContainer}>
                                    <img  className={SkillsStyles.Image} src={redux} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>Redux</h6>
                                </div>
                                <div className={SkillsStyles.SkillContainer}>
                                    <img className={SkillsStyles.Image} src={node} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>Node JS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={SkillsStyles.SecondSection}>
                        <div className={SkillsStyles.skillsWithTitle} >
                            <h3 className={SkillsStyles.SectionTitle}>Back End Skills</h3>
                            <div className={SkillsStyles.BackendskillItems} >
                                <div className={SkillsStyles.SkillContainer} style={{margin:"auto"}}>
                                    <img className={SkillsStyles.Image} src={mongo} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>MongoDB</h6>
                                </div >
                                <div className={SkillsStyles.SkillContainer} style={{margin:"auto"}}>
                                    <img className={SkillsStyles.Image} src={express} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>Express JS</h6>
                                </div>
                            </div>
                        </div>
                        <div className={SkillsStyles.skillsWithTitle}>
                            <h3 className={SkillsStyles.SectionTitle}>Tools Used</h3>
                            <div className={SkillsStyles.ToolsskillItems}>
                                <div className={SkillsStyles.SkillContainer} style={{margin:"auto"}}>
                                    <img className={SkillsStyles.Image} src={vscode} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>VS Code</h6>
                                </div>
                                <div className={SkillsStyles.SkillContainer} style={{margin:"auto"}}>
                                    <img className={SkillsStyles.Image} src={git} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>Git Hub</h6>  
                                </div>
                                <div className={SkillsStyles.SkillContainer} style={{margin:"auto"}}>
                                    <img className={SkillsStyles.Image} src={postman} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>Postman</h6>
                                </div>
                                <div className={SkillsStyles.SkillContainer} style={{margin:"auto"}}>
                                    <img className={SkillsStyles.Image} src={netlify} alt=""/>
                                    <h6 className={SkillsStyles.Skills}>Netlify</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    )
}

export default Skills;

