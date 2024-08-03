import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import backgroundImg from "../../assets/blackBackground.jpg";
import sltQr from "../../assets/sltQr.png";
import RingVolumeIcon from "@mui/icons-material/RingVolume";

function MainFooter() {
  return (
    <Box
      sx={{
        height: "100%",
        mt: 2, // Margin-top
        width: "100%", // Full width
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically (if needed)
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover", // Cover the entire box
        backgroundRepeat: "no-repeat", // Do not repeat the image
        backgroundPosition: "center", // Center the image
      }}
    >
      <Grid
        container
        spacing={4} // Increase spacing between items
        sx={{
          height: "100%",
          width: "100%", // Adjust width as needed
          maxWidth: "1200px", // Max width to prevent stretching
          flexDirection: "row", // Stack items vertically
          alignItems: "start", // Center content horizontally
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ textAlign: "left" }}>
          <Typography variant="h6" color="white" gutterBottom>
            Contact info
          </Typography>
          <Typography variant="caption" color="white">
            Labour Secretariant
            <br />
            Colombo 05
            <br />
            Sri Lanka
            <br />
            Mehewara Piyesa
            <br />
            Colombo 5
            <br />
            Sri Lanka
            <br />
            +94-112-33-44
            <br />
            +94-212-54 34
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ textAlign: "left" }}>
          <Typography variant="h6" color="white" gutterBottom>
            Related Links
          </Typography>
          <Typography variant="caption" color="white">
            Ministry of Labour and Foreign
            <br />
            Employement
            <br />
            Employee's Provident Fund-Central Bank
            <br />
            of Sri Lanka
            <br />
            National Institute of Labour Studies
            <br />
            Department of Management and
            <br />
            Employement
            <br />
            Employees'Trust Fund Board(ETF)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ textAlign: "left" }}>
          <Typography variant="h6" color="white" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="caption" color="white">
            Home
            <br />
            About Labour Department
            <br />
            Contact Us
            <br />
            Downloads
            <br />
            Site Map
            <br />
            FAQ
            <br />
            Organization Structure
            <br />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2}
          sx={{
            textAlign: "left",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems:"center",
            gap:1
          }}
        >
          <img src={sltQr} width={"100px"} alt="QR Code" />
          <Button
            sx={{ border: "solid 1px", borderRadius: "10%", color: "orange" }}
          >
            <RingVolumeIcon />
            CALL 1919
          </Button>
          <Typography color="orange" fontSize={8}>
            Government information center
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainFooter;
