import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Mobile Application Design & Dev.",
    years: "September 2021 - Present",
    content:
      "Learning to develop responsive mobile applications and websites along with proper UI/UX design. Current GPA: 3.99",
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
    years: "January 2023 - Present",
    content: "Second FSWEP term shadowing SharePoint Developer Experts.",
  },
  {
    id: 2,
    title: "Mobile Application Developer | Algonquin College",
    years: "September 2022 - December 2022",
    content:
      "Assisted in full-stack mobile development in React Native & Firebase for the Smart Living Properties application, Smart Tenant",
  },
  {
    id: 3,
    title: "DG Cyber | Department of National Defence",
    years: "June 2022 - September 2022",
    content: `As an IA, Solved IM related issues for DG Cyber sections by submitting tickets to Assyst or
changing GCdocs permissions and extracting monthly SharedDrive & GCdocs Usage Reports and creating powerpoint presentations for the L2's.`,
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
