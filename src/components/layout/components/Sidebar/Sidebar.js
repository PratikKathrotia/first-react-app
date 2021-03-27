import React from 'react';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navItem: {
    borderRadius: '4px',
  },
}));

const SidebarComponent = ({ sidebarItems }) => {
  const classes = useStyles();
  return (
    <div>
      {sidebarItems && sidebarItems.length && (
        <List dense>
          {sidebarItems.map((item) => (
            <ListItem button key={item.label} className={classes.navItem}>
              {/* <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon> */}
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export const Sidebar = SidebarComponent;
