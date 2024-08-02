import {
  Typography,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Box,
  FormLabel,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

function LeftUpperComp() {
  return (
    <Box width={"100%"}>
      <Typography variant="body1" align="center">
        FORM
      </Typography>
      <br />
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"start"}
        flexDirection={"column"}
      >
        <Typography variant="caption" align="left">
          To:The Register Of Trade Unions Colombo
        </Typography>

        <FormControl component={Box} gap={2}>
          <FormLabel align="left">Name of the Trade Union</FormLabel>
          <TextField
            id="outlined-size-small"
            placeholder="Enter name of the Trade Union"
            size="small"
          />

          <FormLabel align="left">Address</FormLabel>
          <TextField
            id="outlined-size-small"
            placeholder="Enter Address"
            size="small"
          />

          <FormLabel align="left">
            Date of Establishment of Trade Union
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker size="small" />
          </LocalizationProvider>
        </FormControl>
      </Box>
    </Box>
  );
}

export default LeftUpperComp;
