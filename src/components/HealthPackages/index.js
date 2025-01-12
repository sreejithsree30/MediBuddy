import React from "react";
import "./index.css";

import hyper from "../../assests/hyper.png"
import obseity from "../../assests/obseity.png"
import smoke from "../../assests/smoke.png"
import blood from "../../assests/blood.png"

import scooty from "../../assests/scooty.png"
import mailimg from "../../assests/Mailimg.png"
import micro from "../../assests/micro.svg"

const HealthPackages = () => {
  const packages = [
    { id: 1, name: "Hyper-Tension", img: hyper },
    { id: 2, name: "Obesity", img: obseity},
    { id: 3, name: "Smoking", img: smoke },
    { id: 4, name: "Diabetic", img:blood},
    { id: 5, name: "Obesity", img: obseity},
    { id: 6, name: "Hyper-Tension", img: hyper},
  ];

  const steps = [
    {
      id: 1,
      img:micro,
      description:
        "Search for required Lab tests and select Diagnostic centre of your choice. Add prescription, patient details and address to complete the booking.",
    },
    {
      id: 2,
      img: scooty,
      description:
        "Visit the lab centre as per your booking. For home sample collection, certified professional will collect the samples at your home.",
    },
    {
        id: 2,
        img: mailimg,
        description:
          "We will email you the reports. You can also access your reports within your account on the MediBuddy App.",
      },
  ];

  return (
    <div className="container">
      <h2 className="header">Lifestyle Health Check-up Packages</h2>
      <div className="grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="card">
            <img src={pkg.img} alt={pkg.name} className="icon" />
            <p>{pkg.name}</p>
          </div>
        ))}
      </div>

      <div className="how-it-works">
        <h2>How it Works?</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <img src={step.img} alt="Step Icon" className="step-icon" />
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
