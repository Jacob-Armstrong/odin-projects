import { useState } from "react";
import "./App.css";

import PersonalDetailForm from "./components/personal-details/PersonalDetailForm";

import PersonalDetailDisplay from "./components/personal-details/PersonalDetailDisplay";

function App() {
  const [profile, setProfile] = useState({});
  // const [education, setEducation] = useState([]);
  // const [experience, setExperience] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [skills, setSkills] = useState([]);

  return (
    <div className="main">
      <div className="resume-preview">
        <PersonalDetailForm profile={profile} handleProfile={setProfile} />
        {/* <EducationForm /> */}
        {/* <ExperienceForm /> */}
        {/* <ProjectsForm /> */}
        {/* <SkillsForm /> */}
      </div>
      <div className="resume-preview">
        <PersonalDetailDisplay profile={profile} />
        {/* <EducationDisplay /> */}
        {/* <ExperienceDisplay /> */}
        {/* <ProjectsDisplay /> */}
        {/* <SkillsDisplay /> */}
      </div>
    </div>
  );
}

export default App;
