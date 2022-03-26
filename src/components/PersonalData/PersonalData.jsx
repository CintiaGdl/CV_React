import React from "react";
import "./PersonalData.scss";

const PersonalData = ({ data }) => {
  return (
    <div className="data">
      <h2>{data.name}</h2>
      <img src={data.image} alt="" />
      <div className="card">
      <p>Where I am?  {data.adress}</p>
        <p>{data.city} </p>
        <p>Born in: {data.birthDate}</p>
        <p>
          <a href={"my email:" + data.email}>
          cintia@email.com
          </a>
        </p>
        <p>Phone number: {data.phone}</p>
        <p><a href={data.gitHub}>
            See my GitHub
          </a></p>
      </div>
    </div>
  );
};

export default PersonalData;