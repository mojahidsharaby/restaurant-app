import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {

  function getNavLinkClass({ isActive }) {

    return isActive
      ? `nav-link ${styles.navLink} ${styles.active}`
      : `nav-link ${styles.navLink}`;
    
  }

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white border-bottom py-3 ${styles.restaurantNavbar}`}
    >
      <div className="container">
        
        {/* rstaurant brand */}

        <Link className={`navbar-brand fw-semibold ${styles.brand}`} to="/">
         Al-Sharaby Restaurant
        </Link>

        {/* phone menu buttom */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#restaurantNavbar"
          aria-controls="restaurantNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>
        </button>

        {/* navigation link */}

        <div className="collapse navbar-collapse" id="restaurantNavbar">

          <ul className={`navbar-nav ms-auto ${styles.navList}`}>

            <li className="nav-item">

              <NavLink className={getNavLinkClass} to="/" end>
                Home
              </NavLink>

            </li>

            <li className="nav-item">
              
              <NavLink className={getNavLinkClass} to="/menu">
                Menu
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink className={getNavLinkClass} to="/about">
                About
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink className={getNavLinkClass} to="/contact">
                Contact
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink className={getNavLinkClass} to="/reservation">
                Reservation
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink className={getNavLinkClass} to="/cart">
                Cart
              </NavLink>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
