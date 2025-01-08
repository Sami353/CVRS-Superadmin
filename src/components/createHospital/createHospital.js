import React, { useState } from "react";
import "./createHospital.css";

const CreateHospital = () => {
  const [hospitalData, setHospitalData] = useState({
    name: "",
    location: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData({ ...hospitalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hospital Data:", hospitalData);
    alert("Hospital created successfully!");
    setHospitalData({
      name: "",
      location: "",
      contact: "",
      email: "",
    });
  };

  return (
    <div className="create-hospital">
      <h2>Create Hospital</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hospital Name:
          <input
            type="text"
            name="name"
            value={hospitalData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={hospitalData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={hospitalData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={hospitalData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Hospital</button>
      </form>
    </div>
  );
};

export default CreateHospital;
