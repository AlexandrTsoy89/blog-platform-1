import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import edit from '@/assets/edit.png';
import settings from '@/assets/settings.png';
import userIcon from '@/assets/user.png';

function Header() {
  const { user } = useContext(AuthContext);

  console.log(user);

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

          {user ? (
            <>
              <NavLink
                to="/editor"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                <img src={edit} alt="" className={styles.icon} />
                New Post
              </NavLink>

              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                <img src={settings} alt="" className={styles.icon} />
                Settings
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                <img src={userIcon} alt="" className={styles.icon} />
                {user.username}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Sign In
              </NavLink>

              <NavLink
                to="/sign-up"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
