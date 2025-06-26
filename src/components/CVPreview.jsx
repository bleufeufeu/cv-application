import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export default function CVPreview({
  generalInfo,
  practicalInfo,
  educationInfo,
}) {
  return (
    <div className="cvPage">
      <section className="cvGeneralSection">
        <h1>{generalInfo.name}</h1>
        <h2>{generalInfo.role}</h2>
        <div className="cvGeneralDetails">
          {generalInfo.email !== "" && (
            <p>
              <FaEnvelope /> {generalInfo.email}
            </p>
          )}
          {generalInfo.phone !== "" && (
            <p>
              <FaPhone /> {generalInfo.phone}
            </p>
          )}
          {generalInfo.address !== "" && (
            <p>
              <FaLocationDot /> {generalInfo.address}
            </p>
          )}
          {generalInfo.website !== "" && (
            <p>
              <FaArrowUpRightFromSquare /> {generalInfo.website}
            </p>
          )}
        </div>
      </section>

      <section className="cvPracticalSection">
        <h2>Work Experience</h2>
        <div className="cvPracticalDetails">
          {practicalInfo.map((practical) => {
            return (
              <div className="cvPracticalItem" key={practical.id}>
                <div className="company">{practical.company}</div>
                <div className="spacebtwRow">
                  <div className="jobtitle">{practical.title}</div>
                  <div className="jobdate">{practical.date}</div>
                </div>
                <div className="description">{practical.description}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="cvEducationSection">
        <h2>Education</h2>
        <div className="cvEducationDetails">
          {educationInfo.map((education) => {
            return (
              <div className="cvEducationItem" key={education.id}>
                <div className="spacebtwRow">
                  <div className="company">{education.school}</div>
                  <div>{education.location}</div>
                </div>
                <div className="spacebtwRow">
                  <div>{education.degree}</div>
                  <div>{education.date}</div>
                </div>
                <div>{education.description}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
