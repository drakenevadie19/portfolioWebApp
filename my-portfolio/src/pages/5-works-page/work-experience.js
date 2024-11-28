import { useNavigate } from 'react-router-dom';

const WorkExperience = ({works, index}) => {

    const navigate = useNavigate();

    return (
        <>
            <div>
            {/* onClick={() => navigate(`/main/works/${index}`)} */}
                <div className="internship">
                    <img src={works.imageLink} className="bio-box" alt={works.alt} />
                    <div className="company-position">
                        <div className="left">
                            <h3>{works.role}</h3>
                            <h5>{works.company}</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default WorkExperience;