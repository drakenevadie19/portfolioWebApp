import { useParams } from "react-router-dom";
import workdata from "./work-data";

const WorkExperienceDetailPage = () => {
    const {id} = useParams();
    return (
        <>
            <div className="page-body">
                <div className="work-datail-main-page">
                    
                </div>
                <h1>{workdata[id].role}</h1>
            </div>
        </>
    )
}

export default WorkExperienceDetailPage;