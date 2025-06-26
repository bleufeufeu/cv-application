import Input from "../elements/Input";
import TextArea from "../elements/TextArea";
import { FaPlus, FaRegTrashCan, FaGraduationCap } from "react-icons/fa6";

export default function EducationForm({
  educationInfo,
  changeHandler,
  addButton,
  deleteButton,
}) {
  return (
    <section className="educationForm">
      <h2>
        <FaGraduationCap /> Education
      </h2>
      <div className="educationFormItems">
        {educationInfo.map((education) => {
          return (
            <div className="educationItem" key={education.id}>
              <button
                className="delete"
                type="button"
                onClick={() => deleteButton(education.id)}
              >
                <FaRegTrashCan />
              </button>

              <Input
                labelValue="School"
                htmlFor={`school-${education.id}`}
                name="school"
                id={`school-${education.id}`}
                type="text"
                placeholder="Canada University"
                value={education.school}
                onChange={(event) => changeHandler(event, education.id)}
              />

              <div className="itemRow">
                <Input
                  labelValue="Location"
                  htmlFor={`location-${education.id}`}
                  name="location"
                  id={`location-${education.id}`}
                  type="text"
                  placeholder="Ontario, Canada"
                  value={education.location}
                  onChange={(event) => changeHandler(event, education.id)}
                />
                <Input
                  labelValue="Date"
                  htmlFor={`date-${education.id}`}
                  name="date"
                  id={`date-${education.id}`}
                  type="text"
                  placeholder="September 2000 - June 2004"
                  value={education.date}
                  onChange={(event) => changeHandler(event, education.id)}
                />
              </div>

              <Input
                labelValue="Degree"
                htmlFor={`degree-${education.id}`}
                name="degree"
                id={`degree-${education.id}`}
                type="text"
                placeholder="Bachelor of Science, Chemistry"
                value={education.degree}
                onChange={(event) => changeHandler(event, education.id)}
              />

              <TextArea
                labelValue="Description"
                htmlFor={`description-${education.id}`}
                name="description"
                id={`description-${education.id}`}
                type="text"
                placeholder=""
                value={education.description}
                onChange={(event) => changeHandler(event, education.id)}
              />
            </div>
          );
        })}
      </div>
      <button className="addButton" type="button" onClick={addButton}>
        <FaPlus /> Add School
      </button>
    </section>
  );
}
