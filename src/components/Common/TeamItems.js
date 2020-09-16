import React, { Component } from "react";

export class TeamItems extends Component {
  render() {
    return (
      <div className='col-sm-4'>
        <div className='team-member'>
          <img
            src={this.props.image}
            className='img-responsive img-circle'
            alt=''
          />
          <h4>{this.props.name}</h4>
          <p className='text-muted'>{this.props.positon}</p>
          <ul className='list-inline social-buttons'>
            <li>
              <a to='#'>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a to='#'>
                <i className='fa fa-facebook'></i>
              </a>
            </li>
            <li>
              <a to='#'>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamItems;
