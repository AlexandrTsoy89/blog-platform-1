import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Realworld Blog
        </NavLink>

        <nav className={styles.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Sign In
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
