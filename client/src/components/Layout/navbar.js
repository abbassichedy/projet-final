import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <div className='navnav'>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark position-fixed'>
      <a className='home nav-link text-white text-uppercase ml-5' href='#'>
                Home&nbsp;<i className='home fas fa-home'></i>
                <span class='sr-only'>(current)</span>
              </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse ml-5' id='navbarTogglerDemo02'>
          <ul className='navbar-nav m-auto mt-2 mt-lg-0'>
            {/* <li className='nav-item active'>
              <a className='nav-link text-white text-uppercase ml-5' href='#'>
                Home&nbsp;<i class='fas fa-home'></i>
                <span class='sr-only'>(current)</span>
              </a>
            </li> */}
            {/* <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle text-white text-uppercase ml-5'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'>
                Caterogy
              </a>
              <div class='dropdown-menu bg-dark' aria-labelledby='navbarDropdownMenuLink'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li> */}
            <a className='navbar-brand' href='#'>
          <svg
            className='icon'
            xmlns='http://www.w3.org/2000/svg'
            width='65'
            height='65'
            viewBox='0 0 65 65'>
            <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
              <g stroke='#6B6C6E' strokeWidth='2' transform='translate(2 1)'>
                <path d='M24.6 18.1c1.9-4.7 3.4-7.9-2.8-14.1C19.2 1.4 15.7.1 12.3.2l5.1 5.1-2.7 10-10 2.7-5.1-5.1c-.1 3.4 1.2 6.8 3.8 9.5 6.2 6.2 9.4 4.8 14.1 2.8M36.6 44.3c-1.9 4.7-3.4 7.8 2.8 14.1 2.6 2.6 6 3.9 9.5 3.8L44 57.3l2.7-10 10-2.7 4.9 4.9c.1-3.4-1.2-6.9-3.8-9.5-6.2-6.2-9.4-4.8-14-2.9M24.8 32.5l-9.3-9.4M38.7 46.3l-9.5-9.5M39.2 32.7l6.6 6.6M22.5 16.1l6.3 6.2M3.1 61.5L.3 58.7l5.6-8.5 3.6-2.1 17.6-17.7 4.3 4.3-17.7 17.7-2.1 3.5-8.5 5.6z'></path>
                <path d='M39.2 32.6l21.9-21.9c.8-.8.8-2 0-2.8L54 .8c-.8-.8-2-.8-2.8 0L29.3 22.7c-.6.6-.7 1.5-.4 2.3-.4.1-3.2 1.3-3.2 1.3-.8.8-.8 2 0 2.8l7.1 7.1c.8.8 2 .8 2.8 0 0 0 1.2-2.8 1.3-3.2.7.3 1.6.2 2.3-.4h0zM51.9 5.7L34.2 23.4M56.1 9.9L38.5 27.6'></path>
              </g>
            </g>
          </svg>
        </a>
          </ul>
          {/* <form className='form-inline my-2 my-lg-0'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' />
            <button className='btn btn-outline-danger my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form> */}
          {isAuthenticated ? (
              <li className='nav-item'>
                <a className='nav-link ml-5' href='#'>
                  <Link to='/'>
                    <button
                      
                      type='button'
                      className='bouton btn-danger'
                      onClick={e => logout()}>
                      Logout
                    </button>
                  </Link>
                </a>
              </li>
            ) : (
              <Fragment>
                <li className='nav-item'>
                  <a className='nav-link ml-5' href='#'>
                    <Link to='/add'>
                      <button type='button' className='btn-danger bouton'>
                        Register
                      </button>
                    </Link>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#' tabindex='-1' aria-disabled='true'>
                    <Link to='/login'>
                      <button type='button' class='btn-success bouton'>
                        Login
                      </button>
                    </Link>
                  </a>
                </li>
              </Fragment>
            )}
              
        </div>
      </nav>
    </div>
  );
};
const mapState = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapState, { logout })(Navbar);
