import { useState } from "react";
import "./App.css";

import PersonalDetailForm from "./components/personal-details/PersonalDetailForm";
import EducationList from "./components/education/EducationList";

import PersonalDetailDisplay from "./components/personal-details/PersonalDetailDisplay";

function App() {
  const [profile, setProfile] = useState({});
  const [education, setEducation] = useState([]);
  // const [experience, setExperience] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [skills, setSkills] = useState([]);

  return (
    <div className="main">
      <div className="resume-forms">
        <PersonalDetailForm profile={profile} handleProfile={setProfile} />
        <EducationList education={education} setEducation={setEducation} />
        {/* <ExperienceList /> */}
        {/* <ProjectsList /> */}
        {/* <SkillsList /> */}
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
