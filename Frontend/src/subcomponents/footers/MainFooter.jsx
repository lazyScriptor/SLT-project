import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import backgroundImg from "../../assets/blackBackground.jpg";
import sltQr from "../../assets/sltQr.png";
import RingVolumeIcon from "@mui/icons-material/RingVolume";

function MainFooter() {
  return (
    <Box
      sx={{
        height: "auto",
        mt: 20,
        pt:5,
        pb:8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          height: "100%",
          width: "100%",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            color="white"
            gutterBottom
            sx={{
              backgroundColor: "#9e9e9e30",
              padding: "8px",
              borderLeft: "2px solid #9e9e9e", // Add a left border
              borderRadius: "0px 10px 0px 10px",
            }}
          >
            Contact info
          </Typography>

          <Typography variant="caption" color="#bebebe">
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
          <Typography
            variant="h6"
            color="white"
            gutterBottom
            sx={{
              backgroundColor: "#9e9e9e30",
              padding: "8px",
              borderLeft: "2px solid #9e9e9e", // Add a left border
              borderRadius: "0px 10px 0px 10px",
            }}
          >
            Related Links
          </Typography>
          <Typography variant="caption" color="#bebebe">
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
          <Typography
            variant="h6"
            color="white"
            gutterBottom
            sx={{
              backgroundColor: "#9e9e9e30",
              padding: "8px",
              borderLeft: "2px solid #9e9e9e", // Add a left border
              borderRadius: "0px 10px 0px 10px",
            }}
          >
            Quick Links
          </Typography>
          <Typography variant="caption" color="#bebebe">
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
            alignItems: "center",
            gap: 1,
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
