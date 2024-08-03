import { Box, Button, Grid } from "@mui/material";
import React from "react";
import backgroundImage from "../../assets/Background-36.png";
import transLogoLabour from "../../assets/transLogoLabour.png";
import HomeIcon from "@mui/icons-material/Home";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FeedIcon from '@mui/icons-material/Feed';
import GetAppIcon from '@mui/icons-material/GetApp';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SearchIcon from '@mui/icons-material/Search';

function SecondHeader() {
  return (
    <Box
      sx={{
        width: "100vw",
      }}
    >
      <Grid container spacing={2} sx={{ width: "100vw", padding: 2 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <img src={transLogoLabour} alt="Labour Logo" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={0}
          md={2}
          lg={2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={7}
          lg={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            gap: 1,
          }}
        >
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem", 
              display: "flex",
              alignItems: "center",
              gap: 0.5, 
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <HomeIcon />
            HOME
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: 0.5, 
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <ContactEmergencyIcon />
            ABOUT
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: 0.5, 
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <PeopleAltIcon />
            SERVICES
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem", 
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <ReceiptIcon />
            NOTICES
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: 0.5, 
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <FeedIcon />
            NEWS
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: 0.5, 
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <GetAppIcon />
            DOWNLOADS
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem", 
              display: "flex",
              alignItems: "center",
              gap: 0.5, 
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <ContactPhoneIcon />
            Contact Us
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: 0.5, 
              '&:hover': {
                backgroundColor: "darkred",
                color: "white",
              },
            }}
          >
            <SearchIcon />
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecondHeader;
