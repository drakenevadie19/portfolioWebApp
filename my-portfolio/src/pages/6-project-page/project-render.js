import React, { useState } from "react";
import ProjectStack from './project-techStack-list';
import { Dialog, DialogContent } from "@mui/material";
import "./css/project-page.css";

const ProjectRender =({project}) => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");

  const handleOpen = (links) => {
    // console.log("Selected file:", links);
    setSelectedFile(links);
    // console.log("Selected file:", links.endsWith(".pdf"));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFile("");
  };
    return (
        <>
            <div className="project-render-wrap">
                <div className="project-render-first-block">
                    <div className="project-name-and-participant">
                        <div className="project-name">
                            <h3>{project.name}</h3>
                            {/* <h4>({project.workTime})</h4> */}
                        </div>
                        <div className="project-participant">
                            <h3>{project.workTime}</h3>
                        </div>
                    </div>

                    <div className="project-render-src">
                        {project.demoLink 
                        ?
                        <iframe 
                            className="project-render-src-here"
                            src={project.demoLink}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            controls="" type="video/mp4" 
                            allowFullScreen>
                        </iframe>
                        :                        
                        <img src={project.src} alt="Project" className="project-render-src-here" />
                        }
                    </div>
                </div>
                
                <div className="project-description">
                    <h5>{project.description}</h5>
                </div>

                <div className="project-tech-stack">
                    <ProjectStack techStacks={project.techStack} />
                    {/* <h5>{project.techStack}</h5> */}
                </div>
                
                <div className='go-Live-Buttons'>
                    {project.liveDemo[0] === "yes" && <a href={project.liveDemo[1]} className="btn btn-danger" target="_blank" rel="noreferrer">Live Demo</a>}
                    {project.link && <a href={project.link} className="btn btn-primary" target="_blank" rel="noreferrer">Explore more on my Github Repository</a>}
                    {project.posterLink && <button className="btn btn-warning" onClick={() => handleOpen(project.posterLink)}>View Poster</button>}
                        

                    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                        <DialogContent>
                        {selectedFile.endsWith(".pdf") && (
                            <iframe
                                src={`${selectedFile}#zoom=10`}
                                width="100%"
                                height="700px"
                                title="Poster Preview"
                                allowFullScreen
                                style={{ border: "none" }}
                            />
                        )}
                        </DialogContent>
                    </Dialog>
                </div>

            </div>
        </>
    );
}

export default ProjectRender;