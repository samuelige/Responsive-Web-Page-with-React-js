import React, { Component } from "react";

import SinglePortfolio from "./SinglePortfolio";

import img1 from "../assets/img/portfolio/roundicons.png";
import img2 from "../assets/img/portfolio/startup-framework.png";
import img3 from "../assets/img/portfolio/treehouse.png";
import img4 from "../assets/img/portfolio/golden.png";
import img5 from "../assets/img/portfolio/escape.png";
import img6 from "../assets/img/portfolio/dreams.png";

const forPortfolio = [
  {
    image: img1,
    title: "Round Icons",
    subTitle: "Graphic Design",
  },
  {
    image: img2,
    title: "Startup Framework",
    subTitle: "Website Design",
  },
  {
    image: img3,
    title: "Treehouse",
    subTitle: "Graphic Design",
  },
  {
    image: img4,
    title: "Golden",
    subTitle: "Graphic Design",
  },
  {
    image: img5,
    title: "Escape",
    subTitle: "Graphic Design",
  },
  {
    image: img6,
    title: "Dreams",
    subTitle: "Graphic Design",
  },
];

export class Portfolio extends Component {
  render() {
    return (
      <section id='portfolio' class='bg-light-gray'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12 text-center'>
              <h2 class='section-heading'>Portfolio</h2>
              <h3 class='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div class='row'>
            {forPortfolio.map((items, index) => {
              return <SinglePortfolio {...items} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
