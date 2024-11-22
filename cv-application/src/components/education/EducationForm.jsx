import { useState } from "react";
import Input from "../Input";

function EducationForm({ setEducation, setEditing }) {
  const [formData, setFormData] = useState({
    school: "",
    city: "",
    degree: "",
    region: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducation((prevEducation) => [
      ...prevEducation,
      {
        id: crypto.randomUUID(),
        ...formData,
      },
    ]);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false); // Close the form
  };

  return (
    <form className="education-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        label="School"
        id="school"
        placeholder="Saddleback College"
        value={formData.school}
        onChange={handleChange}
      />
      <Input
        type="text"
        label="City"
        id="city"
        placeholder="Mission Viejo"
        value={formData.city}
        onChange={handleChange}
      />
      <Input
        type="text"
        label="Degree"
        id="degree"
        placeholder="Bachelor's in Computer Science"
        value={formData.degree}
        onChange={handleChange}
      />
      <Input
        type="text"
        label="State/Region"
        id="region"
        placeholder="CA"
        value={formData.region}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="Start Date"
        id="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="End Date"
        id="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
      <div className="button-div">
        <button type="submit" className="submit-btn">
          Save
        </button>
        <button type="button" className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
