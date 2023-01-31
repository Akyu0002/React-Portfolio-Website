import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/html5.svg",
  },
  {
    id: 2,
    image: "images/css3.svg",
  },
  {
    id: 3,
    image: "images/sass.svg",
  },
  {
    id: 4,
    image: "images/bootstrap.svg",
  },
  {
    id: 5,
    image: "images/javascript.svg",
  },
  {
    id: 6,
    image: "images/nodejs.svg",
  },
  {
    id: 7,
    image: "images/react.svg",
  },
  {
    id: 8,
    image: "images/dart.svg",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        {/* <h2 className="section-title">Technologies</h2> */}
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 alignTech" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="tech-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
