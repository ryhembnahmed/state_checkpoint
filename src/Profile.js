import React from "react";

function Profile({ fullName, bio, profession, children}) {
  return (
    <div>
      <div>
        <span><b>FullName: </b>{fullName} </span>
      </div>
      <div>
        <span><b>Bio: </b>{bio}</span>
      </div>
      <div>
        <span> <b>Profession: </b>{profession}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Profile;
