import React, { Component } from "react";

export class ClientItems extends Component {
  render() {
    return (
      <div className='col-md-3 col-sm-6'>
        <a to='#'>
          <img
            src={this.props.image}
            className='img-responsive img-centered'
            alt=''
          />
        </a>
      </div>
    );
  }
}

export default ClientItems;
