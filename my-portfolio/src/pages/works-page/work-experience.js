const WorkExperience = ({works}) => (
    <>
        <div>
            <div className="internship">
                <img src={works.imageLink} className="bio-box" alt={works.alt} />
                <div className="company-position">
                    <div className="left">
                        <h3>{works.role}</h3>
                        <h5>{works.company}</h5>
                    </div>
                    <div className="right">
                        <i><h5>{works.time}</h5></i>
                        <i><h5>{works.location}</h5></i>
                    </div>
                </div>
            </div>
            
            <ul>
                {works.description.map(des => (
                    <li>{des}</li>
                ))}
            </ul>
        </div>
        
    </>
)

export default WorkExperience;