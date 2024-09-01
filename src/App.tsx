import React from "react";
import { Box } from "@mui/material";
import UserTable from "./Components/Table/Table";
function App() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <UserTable />
    </Box>
  );
}

export default App;
