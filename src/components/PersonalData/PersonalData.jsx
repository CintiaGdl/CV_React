import React from "react";
import "./PersonalData.scss";

const PersonalData = ({ data }) => {
  return (
    <div className="data">
      <div className="image">
        <img src={data.image} alt="" />
        <div className="dataImg">
          <h1>Welcome to my CV</h1>
          <h1>{data.name}</h1>
        </div>
      </div>
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