import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

const HeaderComponent = (props) => {
  return (
    <div className={classes.Header}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active_link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth" exact activeClassName="active_link">
                Authenticate
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export const Header = React.memo(HeaderComponent);
