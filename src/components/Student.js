import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper, Button } from "@mui/material";
import { useState } from "react";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const student = { name: name, address: address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
  };
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
        <h1 style={{ color: "blue" }}>
          <u>Add Student</u>
        </h1>
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          style={{ margin: "10px" }}
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          style={{ margin: "10px" }}
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </Paper>
    </Box>
  );
}
