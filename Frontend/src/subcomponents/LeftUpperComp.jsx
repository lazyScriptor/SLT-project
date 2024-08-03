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
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Swal from "sweetalert2";

import { Controller, useForm } from "react-hook-form";
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

export default function LeftUpperComp({ existingtradeunionnames = [""] }) {
  const [nameState, setNameState] = useState(false);
  const [nameVisibility, setNameVisibility] = useState(false);
  //created a seperate yup to use at 4 phonenumber validations at once
  const phoneNumberValidation = yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .test("phone-number-validation", function (value) {
      if (!value) return false;
      if (value.startsWith("0")) {
        if (value.length !== 10) {
          return this.createError({ message: `Enter a valid phone number` });
        }
      } else {
        if (value.length !== 9) {
          return this.createError({ message: "Enter a valid phone number" });
        }
      }
      return true;
    });

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    name2: yup.string().required("Name is required"),
    nic: yup
      .string()
      .required("NIC is required")
      .transform((value) => value.trim())
      .test("is-valid-nic", "Please enter a valid NIC number", (value) => {
        if (!value) return false;
        const nineDigitsAndV = /^[0-9]{9}v$/i;
        const validFormatCheck = /^[1-9]\d{8,10}$/;
        const twelveDigits = /^[0-9]{12}$/;
        return nineDigitsAndV.test(value) || twelveDigits.test(value);
      }),
    nic2: yup
      .string()
      .required("NIC is required")
      .transform((value) => value.trim())
      .test("is-valid-nic", "Please enter a valid NIC number", (value) => {
        if (!value) return false;
        const nineDigitsAndV = /^[0-9]{9}v$/i;
        const validFormatCheck = /^[1-9]\d{8,10}$/;
        const twelveDigits = /^[0-9]{12}$/;
        return nineDigitsAndV.test(value) || twelveDigits.test(value);
      }),
    tradeunionname: yup
      .string()
      .required("tradeunionname is required")
      .min(3, "tradeunionname must be at least 3 characters")
      .notOneOf(existingtradeunionnames, "tradeunionname already exists"),
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
        const validDomains = ["com", "net", "org", "edu", "gov", "mil", "lk"];
        const domainExtension = domainPart.split(".").pop();
        return validDomains.includes(domainExtension);
      }),
    email2: yup
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
        const validDomains = ["com", "net", "org", "edu", "gov", "mil", "lk"];
        const domainExtension = domainPart.split(".").pop();
        return validDomains.includes(domainExtension);
      }),
    phoneNumbers: yup.object().shape({
      phoneNumber1: phoneNumberValidation,
      phoneNumber2: phoneNumberValidation,
      phoneNumber3: phoneNumberValidation,
      phoneNumber4: phoneNumberValidation,
    }),
    address: yup.string().required("Address is required"),
    file: yup.mixed().required("File is required"),
    establishmentDate: yup.date().required("Date of Establishment is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    control,
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

  const handleTradeUnionNameChange = async (data) => {
    if (data === "") {
      setNameVisibility(false);
      return;
    }
    try {
      const response = await axios.get(
        "http://localhost:8085/getTradeUnionName",
        {
          params: { name: data },
        }
      );
      console.log("front end axios response", response.data);
      setNameVisibility(true);
      setNameState(response.data);
    } catch (error) {
      console.log("This is the error occurred in the front end", error);
    }
  };
  const onSubmit = async (data) => {
    console.log("This is the form data", data);

    const formattedDate = data.establishmentDate.toISOString().split("T")[0]; // Convert to 'YYYY-MM-DD' format

    // Prepare data to be sent to the backend
    const payload = {
      ...data,
      establishmentDate: formattedDate,
    };

    // Perform API call
    try {
      const response = await axios.post(
        "http://localhost:8085/submitForm",
        payload
      );
      const isSuccess = response.data.success; // Expecting  true or false
      console.log("Response from backend:", isSuccess);

      if (isSuccess) {
        Swal.fire({
          icon: "success",
          title: "Form Submitted Successfully",
          text: "Your form has been submitted.",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "There was an issue submitting your form.",
        });
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: "An error occurred while submitting your form.",
      });
    }

    setNameVisibility(false);

    if (data.file) {
      const file = data.file;
      console.log("File selected:", file.name);
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box gap={2} display={"flex"} flexDirection={"column"}>
            <FormLabel align="left">Name of the Trade Union</FormLabel>
            <TextField
              id="outlined-size-small"
              placeholder="Enter name of the Trade Union"
              size="small"
              onChange={(e) => handleTradeUnionNameChange(e.target.value)}
              inputProps={{ ...register("tradeunionname") }}
              error={!!errors.tradeunionname}
              helperText={errors.tradeunionname?.message}
            />
            {nameVisibility &&
              (nameState ? (
                <Typography variant="caption" color={"error"} align="left">
                  Trade union name is not available
                </Typography>
              ) : (
                <Typography variant="caption" color={"green"} align="left">
                  Trade union name is available
                </Typography>
              ))}

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
            <Controller
              name="establishmentDate"
              control={control}
              render={({ field }) => (
                <>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      {...field}
                      onChange={(value) => field.onChange(value)}
                    />
                  </LocalizationProvider>
                  {errors.establishmentDate && (
                    <FormHelperText error>
                      {errors.establishmentDate.message}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </Box>
          {/* Accordian starting from here -Accordian 1*/}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#31bdeb38", // Light blue background color
                color: "blue", // Blue text color
                "& .MuiAccordionSummary-expandIcon": {
                  color: "blue", // Change the expand icon color to match
                },
                "& .MuiTypography-root": {
                  color: "blue", // Ensure the title text color is blue
                },
              }}
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
                name="presidentName"
                inputProps={{ ...register("name") }}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    elevation={0}
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
                    elevation={0}
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
                      {...register("phoneNumbers.phoneNumber1")}
                      error={!!errors.phoneNumbers?.phoneNumber1}
                      helperText={errors.phoneNumbers?.phoneNumber1?.message}
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    elevation={0}
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
                      {...register("phoneNumbers.phoneNumber2")}
                      error={!!errors.phoneNumbers?.phoneNumber2}
                      helperText={errors.phoneNumbers?.phoneNumber2?.message}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    elevation={0}
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
              sx={{
                backgroundColor: "#31bdeb38", // Light blue background color
                color: "blue", // Blue text color
                "& .MuiAccordionSummary-expandIcon": {
                  color: "blue", // Change the expand icon color to match
                },
                "& .MuiTypography-root": {
                  color: "blue", // Ensure the title text color is blue
                },
              }}
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
                name="secretaryName"
                placeholder="Enter name of president"
                size="small"
                inputProps={{ ...register("name2") }}
                error={!!errors.name2}
                helperText={errors.name2?.message}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    elevation={0}
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
                      inputProps={{ ...register("nic2") }}
                      error={!!errors.nic2}
                      helperText={errors.nic2?.message}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    elevation={0}
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
                      {...register("phoneNumbers.phoneNumber3")}
                      error={!!errors.phoneNumbers?.phoneNumber3}
                      helperText={errors.phoneNumbers?.phoneNumber3?.message}
                    />
                  </Item>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    elevation={0}
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
                      {...register("phoneNumbers.phoneNumber4")}
                      error={!!errors.phoneNumbers?.phoneNumber4}
                      helperText={errors.phoneNumbers?.phoneNumber4?.message}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    elevation={0}
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
                      inputProps={{ ...register("email2") }}
                      error={!!errors.email2}
                      email
                      helperText={errors.email2?.message}
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
              sx={{
                backgroundColor: "#31bdeb38", // Light blue background color
                color: "blue", // Blue text color
                "& .MuiAccordionSummary-expandIcon": {
                  color: "blue", // Change the expand icon color to match
                },
                "& .MuiTypography-root": {
                  color: "blue", // Ensure the title text color is blue
                },
              }}
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
              <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      type="file"
                      onChange={(e) => {
                        field.onChange(e.target.files[0]);
                        handleFileChange(e); // To update the local state for file upload
                      }}
                    />
                    {errors.file && (
                      <FormHelperText error>
                        {errors.file.message}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </AccordionDetails>
          </Accordion>
          <Box display={"flex"} justifyContent={"left"} sx={{mt:4}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // onClick={handleFileUpload}
              // disabled={!file}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
