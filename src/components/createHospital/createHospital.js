import React, { useState } from "react";
import supabase from "../../config/supabaseClient.js";
import "./createHospital.css";
import Sidebar from "../sidebar/sidebar.js";

const CreateHospital = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("hospitals")
      .insert([{ name, location, contact }]);

    if (error) {
      setMessage("Error adding hospital!");
      console.error(error);
    } else {
      setMessage("Hospital added successfully!");
      setName("");
      setLocation("");
      setContact("");
    }
  };

  return (
    <div className="dashboard-container">
    
    <Sidebar/>
    <div className="create-hospital">
      <h2>Create Hospital</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Hospital</button>
      </form>
    </div>
    </div>
  );
};

export default CreateHospital;




// const CreateHospital = () => {
//   const [hospitalData, setHospitalData] = useState({
//     name: "",
//     location: "",
//     contact: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHospitalData({ ...hospitalData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Hospital Data:", hospitalData);
//     alert("Hospital created successfully!");
//     setHospitalData({
//       name: "",
//       location: "",
//       contact: "",
//       email: "",
//     });
//   };

//   return (
//     <div className="create-hospital">
//       <h2>Create Hospital</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Hospital Name:
//           <input
//             type="text"
//             name="name"
//             value={hospitalData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Location:
//           <input
//             type="text"
//             name="location"
//             value={hospitalData.location}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Contact:
//           <input
//             type="text"
//             name="contact"
//             value={hospitalData.contact}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={hospitalData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Create Hospital</button>
//       </form>
//     </div>
//   );
// };

// export default CreateHospital;
