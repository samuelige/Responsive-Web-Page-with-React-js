import React, { Component } from "react";

import ClientItems from "./TeamItems";

//img
import img1 from "../assets/img/clients/envato.jpg";
import img2 from "../assets/img/clients/designmodo.jpg";
import img3 from "../assets/img/clients/themeforest.jpg";

const clients = [{ image: img1 }, { image: img2 }, { image: img3 }];

export class Clients extends Component {
  render() {
    return (
      <aside className='clients'>
        <div className='container'>
          <div className='row'>
            {clients.map((items, index) => {
              return <ClientItems {...items} keys={index} />;
            })}
          </div>
        </div>
      </aside>
    );
  }
}

export default Clients;
