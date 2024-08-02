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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LeftUpperComp({ existingUsernames = [''] }) {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    userRole: yup.array().min(1, "At least one role must be selected"),
   
    nic: yup
      .string()
      .required()
      .transform((value) => value.trim())
      .test("is-valid-nic", "Please enter a valid NIC number", (value) => {
        if (!value) return false;
        const nineDigitsAndV = /^[0-9]{9}v$/i;
        const validFormatCheck = /^[1-9]\d{8,10}$/;
        const twelveDigits = /^[0-9]{12}$/;
        return nineDigitsAndV.test(value) || twelveDigits.test(value);
      }),
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .notOneOf(existingUsernames, "Username already exists"),
    password: yup
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(15, "Password cannot exceed 10 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{5,10})/,
        "Password must include at least one uppercase letter and one symbol (!@#$%^&*)"
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email must follow the format: user@example.com"
      )
      .test("is-valid-domain", "Email domain must be valid", (value) => {
        if (!value) return false;
        const domainPart = value.split("@")[1];
        const validDomains = ["com", "net", "org", "edu", "gov", "mil"];
        const domainExtension = domainPart.split(".").pop();
        return validDomains.includes(domainExtension);
      }),
    phonenumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone number must contain only digits")
      .test("phone-number-validation", function (value) {
        if (!value) return false; // In case the value is undefined or null, required will handle this case
        if (value.startsWith("0")) {
          if (value.length !== 10) {
            return this.createError({
              message: `Enter a valid phone number`,
            });
          }
        } else {
          if (value.length !== 9) {
            return this.createError({
              message: "Enter a valid phone number",
            });
          }
        }
        return true;
      }),
    address: yup.string().required("Address is required"),
    
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  const onSubmit = () => {};
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
    
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box gap={2} display={"flex"} flexDirection={"column"}>
            <FormLabel align="left">Name of the Trade Union</FormLabel>
            <TextField
              id="outlined-size-small"
              placeholder="Enter name of the Trade Union"
              size="small"
              inputProps={{ ...register("username") }}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
    
            <FormLabel align="left">Address</FormLabel>
            <TextField
              id="outlined-size-small"
              placeholder="Enter Address"
              size="small"
              inputProps={{ ...register("address") }}
              error={!!errors.address}
              helperText={errors.address?.message}
            />

            <FormLabel align="left">
              Date of Establishment of Trade Union
            </FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker size="small" />
            </LocalizationProvider>
          </Box>
          {/* Accordian starting from here -Accordian 1*/}
          <Accordion >
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
                inputProps={{ ...register("name") }}
                error={!!errors.name}
                helperText={errors.name?.message}
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
                      inputProps={{ ...register("nic") }}
                      error={!!errors.nic}
                      helperText={errors.nic?.message}
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
                      inputProps={{ ...register("phonenumber") }}
                      error={!!errors.phonenumber}
                      helperText={errors.phonenumber?.message}
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
                      inputProps={{ ...register("phonenumber") }}
                      error={!!errors.phonenumber}
                      helperText={errors.phonenumber?.message}
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
                      inputProps={{ ...register("email") }}
                      error={!!errors.email}
                      email
                      helperText={errors.email?.message}
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
                inputProps={{ ...register("name") }}
                error={!!errors.name}
                helperText={errors.name?.message}
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
                      inputProps={{ ...register("nic") }}
                      error={!!errors.nic}
                      helperText={errors.nic?.message}
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
                      inputProps={{ ...register("phonenumber") }}
                      error={!!errors.phonenumber}
                      helperText={errors.phonenumber?.message}
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
                      inputProps={{ ...register("phonenumber") }}
                      error={!!errors.phonenumber}
                      helperText={errors.phonenumber?.message}
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
                      inputProps={{ ...register("email") }}
                      error={!!errors.email}
                      email
                      helperText={errors.email?.message}
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
            type="submit"
            // onClick={handleFileUpload}
            // disabled={!file}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
