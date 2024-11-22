function PersonalDetailDisplay({ profile }) {
  return (
    <div className="personal-detail-display">
      <h1>{profile.fullName}</h1>
      <p>
        {profile.email ? profile.email + " | " : ""}
        {profile.phoneNum ? profile.phoneNum + " | " : ""}
        {profile.gitHub}
      </p>
    </div>
  );
}

export default PersonalDetailDisplay;
