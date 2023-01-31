import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Mobile Application Design & Dev.",
    years: "September 2021 - Present",
    content:
      "Learning to develop responsive mobile applications and websites along with proper UI/UX design. Current GPA: 3.97",
  },
  {
    id: 2,
    title: "Sir Robert Borden High School",
    years: "2008 - 2011",
    content: "Focused my senior years in Math, Physics and Chemistry.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "DG Cyber | Department of National Defence",
    years: "June 2022 - Present",
    content:
      "Mission Assurance and Cyber Force Development for the Canadian Armed Forces.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
