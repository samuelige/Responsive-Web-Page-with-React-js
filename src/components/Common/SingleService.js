import React, { Component } from "react";

export class SingleService extends Component {
  render() {
    return (
      <div>
        <div className='col-md-4'>
          <span className='fa-stack fa-4x'>
            <i className='fa fa-circle fa-stack-2x text-primary'></i>
            <i className={`fa ${this.props.icon} fa-stack-1x fa-inverse`}></i>
          </span>
          <h4 className='service-heading'>{this.props.title}</h4>
          <p className='text-muted'>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SingleService;
