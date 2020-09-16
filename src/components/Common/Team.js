import React, { Component } from "react";

import TeamIteams from "./TeamItems";

//images
import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";

const team = [
  {
    image: img1,
    name: "Kay Garland",
    position: "Lead Designer",
  },
  {
    image: img2,
    name: "Larry Parker",
    position: "Lead Marketer",
  },
  {
    image: img3,
    name: "Diana Perterse",
    position: "Lead Developer",
  },
];
export class Team extends Component {
  render() {
    return (
      <section id='team' className='bg-light-gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>Our Amazing Team</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            {team.map((item, index) => {
              return <TeamIteams {...item} key={index} />;
            })}
          </div>
          <div className='row'>
            <div className='col-lg-8 col-lg-offset-2 text-center'>
              <p className='large text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
