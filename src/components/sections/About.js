import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Tibet",
  avatarImage: "/images/profilephoto.jpeg",
  content:
    "Hey! I'm Tibet, a Mobile Applications Designer / Developer and Software Engineer from Ottawa, Canada. I have experience in building and designing responsive Web Applications and developing Cyber Security applications. I am fluent in JS/HTML/CSS, Python and React, I am also a huge coffee addict.",
};

const progressData = [
  {
    id: 1,
    title: "Responsive Web Development",
    percantage: 100,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Design",
    percantage: 90,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Mobile Application Development",
    percantage: 75,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects Completed",
    count: 20,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cups of Coffee",
    count: 10000,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Hours of Study",
    count: 654,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Years of Honour Role",
    count: 3,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img
                src={aboutContent.avatarImage}
                alt={aboutContent.name}
                style={{ borderRadius: 20 }}
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a
                      href="https://drive.google.com/file/d/1s3NSQN9r8oe2OAliojcKZD49Z71X_UFX/view?usp=share_link"
                      className="btn btn-default"
                    >
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
