import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LeftUpperComp from "../subcomponents/LeftUpperComp";
import RightUpperComp from "../subcomponents/RightUpperComp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RegistrationForm() {
  return (
    <Box sx={{ width: "70vw" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography variant="h4" color={"black"}>
              APPLICATION FOR REGISTRATION OF TRADE UNIONS
            </Typography>{" "}
            <br />
            <Typography variant="body1" color={"black"}>
              (B-FORM)
            </Typography>{" "}
          </Item>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Item sx={{ display: "flex", justifyContent: "left" }}>
            <LeftUpperComp />
          </Item>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Item elevation={0}>
            <RightUpperComp />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
