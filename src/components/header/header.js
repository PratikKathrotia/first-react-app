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
              <NavLink
                to={{
                  pathname: '/test',
                  hash: '#submit',
                  search: '?quick-search=true',
                }}
              >
                Test
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export const Header = React.memo(HeaderComponent);
