import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top is-primary' aria-label='main navigation'>
        <div className='navbar-brand'>
            <Link to="/" className="navbar-item" title="Logo">
              <img src="/icons/Logo3aaa.svg" alt="Modern Magnolia" style={{ width: '50px' }} />
            </Link>
          <button
            className={`button navbar-burger is-primary-invert ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
                            About
            </Link>
            <Link className='navbar-item' to='/pricing'>
                            Photos
            </Link>
            <Link className='navbar-item' to='/blog'>
                            Blog
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary-inverted is-outlined'
                    to='/contact'>
                            Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
