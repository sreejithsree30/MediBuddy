import React from "react";
import "./index.css";

import jar from "../../assests/jar.png"
import detect from "../../assests/detect.png"
import mask from "../../assests/mask.png"
import spray from "../../assests/spary.png"

const SafeLabTest = () => {
  const safetyFeatures = [
    {
      id: 1,
      name: "Gov. Approved Diagnostic Centres",
      img: jar,
    },
    {
      id: 2,
      name: "Daily Temperature Check of all Technicians",
      img: detect,
    },
    {
      id: 3,
      name: "Mandatory use of Mask & Sanitizers",
      img: mask,
    },
    {
      id: 4,
      name: "Regular Disinfection of Labs",
      img: spray,
    },
  ];

  return (
    <div className="safe-container">
      <h2 className="safe-header">100% Safe & Secure Lab Tests</h2>
      <div className="safe-grid">
        {safetyFeatures.map((feature) => (
          <div key={feature.id} className="safe-card">
            <img src={feature.img} alt={feature.name} className="safe-icon" />
            <p>{feature.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeLabTest;
