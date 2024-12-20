import Input from "../Input";
import "../../styles/PersonalDetails.css";

function PersonalDetailForm({ profile, handleProfile }) {
  function handleChange(e) {
    const { id, value } = e.target;
    handleProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  }

  return (
    <div className="personal-detail-container">
      <b>Personal Information</b>
      <div className="personal-detail-form">
        <Input
          type="text"
          label="Full Name"
          id="fullName"
          value={profile.fullName || ""}
          onChange={handleChange}
          placeholder="John Smith"
        />
        <Input
          type="email"
          label="Email"
          id="email"
          value={profile.email || ""}
          onChange={handleChange}
          placeholder="email@gmail.com"
        />
        <Input
          type="tel"
          label="Phone Number"
          id="phoneNum"
          value={profile.phoneNum || ""}
          onChange={handleChange}
          placeholder="949-949-9449"
        />
        <Input
          type="text"
          label="Github"
          id="gitHub"
          value={profile.gitHub || ""}
          onChange={handleChange}
          placeholder="github.com/profile"
        />
      </div>
    </div>
  );
}

export default PersonalDetailForm;
