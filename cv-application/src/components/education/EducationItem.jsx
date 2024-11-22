import "../../styles/EducationItem.css";

function EducationItem({ edu, setEducation }) {
  const handleDelete = () => {
    setEducation((prevEdu) =>
      prevEdu.filter((prevEduItem) => prevEduItem.id !== edu.id)
    );
  };

  return (
    <div className="education-item">
      <div className="education-text">
        <b>
          {edu.degree} in {edu.major} at {edu.school}
        </b>
        <div>
          {edu.startDate} - {edu.endDate}
        </div>
      </div>
      <div className="edit-btn-div">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EducationItem;
