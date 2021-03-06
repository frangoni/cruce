import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import UsersTable from "./usersTable";
import Badge from "@material-ui/core/Badge";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" id={`simple-tabpanel-${index}`} {...other}>
      {value === index && <Box sx={3}>{children}</Box>}
    </div>
  );
}

export default function Panel({ users, selected }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ height: "65px" }}
        >
          <Tab label="Aceptados" />
          <Tab label="Pendientes" />

          <Badge
            badgeContent={users ? users.filter((user) => user.accepted === false).length : 0}
            color="secondary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            overlap="rectangular"
          />
        </Tabs>
      </AppBar>
      <h1>{selected.trim().replace(/^\w/, (c) => c.toUpperCase())}</h1>
      <TabPanel value={value} index={0}>
        <UsersTable selected={selected} users={users.filter((user) => user.accepted === true)} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UsersTable selected={selected} users={users.filter((user) => user.accepted === false)} showCheck />
      </TabPanel>
    </div>
  );
}
