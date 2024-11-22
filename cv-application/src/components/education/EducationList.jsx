import { useState } from "react";

import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";

function EducationList({ education, setEducation }) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <div className="education-list">
      {education.map((edu) => {
        return (
          <EducationItem key={edu.id} edu={edu} setEducation={setEducation} />
        );
      })}
      {editing ? (
        <EducationForm
          setEducation={setEducation}
          editing={editing}
          setEditing={setEditing}
        />
      ) : (
        <button className="add-btn" onClick={toggleEditing}>
          Add Education
        </button>
      )}
    </div>
  );
}

export default EducationList;
