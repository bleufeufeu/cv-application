import Input from "../elements/Input";
import TextArea from "../elements/TextArea";
import { FaBriefcase, FaPlus, FaRegTrashCan } from "react-icons/fa6";

export default function PracticalForm({
  practicalInfo,
  changeHandler,
  addButton,
  deleteButton,
}) {
  return (
    <section className="practicalForm">
      <h2>
        <FaBriefcase /> Work Experience
      </h2>
      <div className="practicalFormItems">
        {practicalInfo.map((practical) => {
          return (
            <div className="practicalItem" key={practical.id}>
              <button
                className="delete"
                type="button"
                onClick={() => deleteButton(practical.id)}
              >
                <FaRegTrashCan />
              </button>

              <Input
                labelValue="Company"
                htmlFor={`company-${practical.id}`}
                name="company"
                id={`company-${practical.id}`}
                type="text"
                placeholder="Amazon"
                value={practical.company}
                onChange={(event) => changeHandler(event, practical.id)}
              />

              <div className="itemRow">
                <Input
                  labelValue="Job Title"
                  htmlFor={`title-${practical.id}`}
                  name="title"
                  id={`title-${practical.id}`}
                  type="text"
                  placeholder="Head Researcher"
                  value={practical.title}
                  onChange={(event) => changeHandler(event, practical.id)}
                />
                <Input
                  labelValue="Date"
                  htmlFor={`date-${practical.id}`}
                  name="date"
                  id={`date-${practical.id}`}
                  type="text"
                  placeholder="June 2025 - Present"
                  value={practical.date}
                  onChange={(event) => changeHandler(event, practical.id)}
                />
              </div>

              <TextArea
                labelValue="Description"
                htmlFor={`description-${practical.id}`}
                name="description"
                id={`description-${practical.id}`}
                type="text"
                placeholder=""
                value={practical.description}
                onChange={(event) => changeHandler(event, practical.id)}
              />
            </div>
          );
        })}
      </div>
      <button className="addButton" type="button" onClick={addButton}>
        <FaPlus /> Add Job
      </button>
    </section>
  );
}
