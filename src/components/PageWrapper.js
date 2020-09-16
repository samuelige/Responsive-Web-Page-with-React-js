import React, { Component } from "react";

import { Link } from "react-router-dom";

export class PageWrapper extends Component {
  render() {
    return (
      <div>
        <nav
          id='mainNav'
          className='navbar navbar-default navbar-custom navbar-fixed-top'
        >
          <div className='container'>
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className='navbar-header page-scroll'>
              <button
                type='button'
                className='navbar-toggle'
                data-toggle='collapse'
                data-target='#bs-example-navbar-collapse-1'
              >
                <span className='sr-only'>Toggle navigation</span> Menu{" "}
                <i className='fa fa-bars'></i>
              </button>
              <Link className='navbar-brand page-scroll' to='/'>
                Tech Quo
              </Link>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              className='collapse navbar-collapse'
              id='bs-example-navbar-collapse-1'
            >
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <Link className='page-scroll' to='/services'>
                    what do we do
                  </Link>
                </li>
                <li>
                  <Link className='page-scroll' to='/portfolio'>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className='page-scroll' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='page-scroll' to='/team'>
                    Team
                  </Link>
                </li>
                <li>
                  <Link className='page-scroll' to='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
