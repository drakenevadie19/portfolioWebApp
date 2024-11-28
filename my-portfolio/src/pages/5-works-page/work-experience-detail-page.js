import workdata from "./work-data";

const WorkExperienceDetailPage = ({ id }) => {
  // const { id } = useParams();

  return (
    <>
        <div className="work-detail-main-page">
          {/* <div className="back-to-work-button">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => navigate("/main/works")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>{" "}
              Back
            </button>
          </div> */}

          <div className="w-d-job-details">
            <div className="w-d-job-details-heading">
              <img src={workdata[id].imageLink} alt={workdata[id].alt} />

              <div className="w-d-job-details-role">
                <h1>
                  <b>{workdata[id].role}</b>
                </h1>
                <h3>
                  <i>{workdata[id].company}</i>
                </h3>
                <h3>
                  <i>Location: {workdata[id].location}</i>
                </h3>
              </div>
            </div>
            <div className="w-d-job-details-description">
                <h3>
                    <i>Work time: {workdata[id].time}</i>
                </h3>
                { 
                    workdata[id].description.length > 0 &&
                    <div className="w-d-job-details-description-bulletpoint">
                        <h3>Position duties:</h3>
                        <ul>
                            {workdata[id].description.map((description) => (
                                <li>{description}</li>
                            ))}
                        </ul>
                    </div>
                }

                { 
                    workdata[id].skills &&
                    <div className="w-d-job-details-description-bulletpoint">
                        <h3>Techstack:</h3>
                        <ul>
                            {workdata[id].skills.map((skill) => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
          </div>
        </div>
    </>
  );
};

export default WorkExperienceDetailPage;
