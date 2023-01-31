import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "mobile",
  },
  {
    id: 3,
    text: "art",
  },
  {
    id: 4,
    text: "design",
  },
  {
    id: 5,
    text: "branding",
  },
];

const allData = [
  {
    id: 1,
    title: "Flutter App",
    category: "mobile",
    image: "images/works/flutter.png",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 2,
    title: "SAM PWA",
    category: "mobile",
    image: "images/works/SAM.png",
    link: ["https://sam-pwa.netlify.app/"],
  },
  {
    id: 3,
    title: "ActorSearch SPA",
    category: "mobile",
    image: "images/works/ActorSearch.png",
    link: ["https://akyu0002.github.io/simple-spa/#"],
  },
  {
    id: 4,
    title: "Flower Delivery App Wireframe",
    category: "design",
    image: "images/works/Flower_App.png",
    link: [
      "https://xd.adobe.com/view/30941588-dc7f-46fa-a840-42f4277081c3-65c7",
    ],
  },
  {
    id: 5,
    title: "Doors Open Ottawa App Wireframe",
    category: "design",
    image: "images/works/Doors_Open.png",
    popupLink: ["images/works/5.svg"],
  },
  {
    id: 6,
    title: "Off The Tape Logo",
    category: "branding",
    image: "images/works/OTT_Logo.jpg",
    popupLink: ["images/works/OTT_Logo.jpg"],
  },
  {
    id: 7,
    title: "Grocery Store Self Checkout Wireframe",
    category: "design",
    image: "images/works/Self_Checkout.png",
    link: "https://xd.adobe.com/view/dfd1502b-30a9-4288-a8bf-001e7faca1bf-8a82/screen/3215c9a3-b30d-48ad-a358-86b6051aa2bf/",
  },
  {
    id: 8,
    title: "Road to MMED",
    category: "art",
    image: "images/works/MMED.jpg",
    popupLink: ["images/works/MMED.jpg"],
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Projects" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items!"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load More
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
