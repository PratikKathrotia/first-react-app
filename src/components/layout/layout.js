import { Component } from 'react';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Shellbar } from './components/Shellbar/Shellbar';
import { Header } from './components/Header/Header';
import classes from './layout.module.css';

class LayoutComponent extends Component {
  state = {
    navItems: [
      {
        label: 'Dashboard',
      },
      {
        label: 'Income',
        divider: 'above',
      },
      {
        label: 'Expenses',
      },
      {
        label: 'Accounts',
        divider: 'above',
      },
      {
        label: 'Users',
      },
    ],
    title: 'This is the page title',
  };

  render() {
    return (
      <div className={classes.app_root}>
        <div className={classes.shell_container}>
          <Shellbar />
        </div>
        <div className={classes.app_container}>
          <div className={classes.navigation_container}>
            <Sidebar sidebarItems={this.state.navItems} />
          </div>
          <div className={classes.content_container}>
            <div className={classes.header_container}>
              <Header title={this.state.title} actions={[]} />
            </div>
            <div className={classes.route_outlet}>Main view</div>
          </div>
        </div>
      </div>
    );
  }
}

export const Layout = LayoutComponent;
