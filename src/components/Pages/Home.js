import React, { Component } from "react";

import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";

// reusable component
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import Clients from "../Common/Clients";
export class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title='CLOUD ARCHITECTURE AT'
          subTitle='ITS BEST'
          showButton={true}
          link='/services'
          buttonText='TELL ME MORE'
          image={image}
        />
        <Services />
        <Portfolio />
        <Team />
        <Clients />
      </div>
    );
  }
}

export default Home;
