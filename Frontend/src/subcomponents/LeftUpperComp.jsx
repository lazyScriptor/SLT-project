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

import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LeftUpperComp() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleFileUpload = () => {
    if (file) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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

          {/* Accordian starting from here -Accordian 1*/}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Secretary
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
              <FormLabel align="left">Name</FormLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Enter name of president"
                size="small"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">
                      National Identity Card(NIC)
                    </FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter NIC number"
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">Whatsapp Number</FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter Whatsapp number"
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">Contact Number</FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter contact number"
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">Email</FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter email address"
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Accordian starting from here -Accordian 2*/}
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
              <FormLabel align="left">Name</FormLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Enter name of president"
                size="small"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">
                      National Identity Card(NIC)
                    </FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter NIC number"
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">Whatsapp Number</FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter Whatsapp number"
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">Contact Number</FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter contact number"
                      size="small"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "column",
                    }}
                  >
                    <FormLabel align="left">Email</FormLabel>
                    <TextField
                      id="outlined-size-small"
                      placeholder="Enter email address"
                      size="small"
                    />
                  </Item>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Accordian starting from here -Accordian 3*/}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Upload B form
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
              <FormLabel align="left">Upload B -Form</FormLabel>
              <TextField type="file" onChange={handleFileChange} />
            </AccordionDetails>
          </Accordion>

          <Button
            variant="contained"
            color="primary"
            onClick={handleFileUpload}
            disabled={!file}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}


