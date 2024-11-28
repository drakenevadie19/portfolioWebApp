import workdata from "./work-data";

const WorkExperienceDetailPage = ({ id }) => {
  // const { id } = useParams();

  return (
    <>
      <div className="work-detail-main-page">
        <div className="w-d-job-details">
          <div className="w-d-job-details-heading">
            <div className="w-d-job-image-frame">
              <img
                className="w-d-job-image"
                src={workdata[id].imageLink}
                alt={workdata[id].alt}
              />
            </div>

            <div className="w-d-job-details-role">
              <p>
                <b>{workdata[id].role}</b>
              </p>
              <h3 className="w-d-job-details-company-highlight">
                <i>{workdata[id].company}</i>
              </h3>
              <h3>
                <i>Location: {workdata[id].location}</i>
              </h3>
            </div>
          </div>
          <div className="w-d-job-details-description">
            <h3>
              <i>
                <b className="w-d-job-details-company-highlight">Work time: </b>
                {workdata[id].time}
              </i>
            </h3>
            {workdata[id].description.length > 0 && (
              <div className="w-d-job-details-description-bulletpoint">
                <h3>
                  <b className="w-d-job-details-company-highlight">
                    Position duties:
                  </b>
                </h3>
                <ul>
                  {workdata[id].description.map((description) => (
                    <li>{description}</li>
                  ))}
                </ul>
              </div>
            )}

            {workdata[id].skills && (
              <div className="w-d-job-details-description-bulletpoint">
                <h3>
                  <b className="w-d-job-details-company-highlight">
                    Technologies:
                  </b>
                </h3>
                <ul>
                  {workdata[id].skills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperienceDetailPage;
