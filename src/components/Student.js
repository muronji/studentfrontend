import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          style={{ margin: "10px" }}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          style={{ margin: "10px" }}
          fullWidth
        />
      </Paper>
    </Box>
  );
}
