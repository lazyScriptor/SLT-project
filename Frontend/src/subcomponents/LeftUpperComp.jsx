import {
  Typography,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Button,
  Box,
  FormLabel,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

          {/* Accordian starting from here */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              President
            </AccordionSummary>
            <AccordionDetails
              component={Box}
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <FormLabel align="left">Name of the Trade Union</FormLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Enter name of the Trade Union"
                size="small"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item></Item>
                </Grid>
                <Grid item xs={6}>
                  <Item></Item>
                </Grid>
              </Grid>
              <FormLabel align="left">Name of the Trade Union</FormLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Enter name of the Trade Union"
                size="small"
              />
            </AccordionDetails>
          </Accordion>
        </FormControl>
      </Box>
    </Box>
  );
}

export default LeftUpperComp;
