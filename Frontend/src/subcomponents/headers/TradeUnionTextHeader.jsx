import React from "react";
import backgroundImage from "../../assets/Background-36.png";
import { Box, Typography } from "@mui/material";

function TradeUnionTextHeader() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat-x", // Repeat the image horizontally
        backgroundSize: "auto 100%", // Set width to auto and height to 100% of the container's height
        width: "100vw",
        height: "10vh", // Adjust height as needed
      }}
    >
      <Box
        display={"flex"}
        width={"70%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="h4" color={"error"}>
            TRADE UNIONS
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box>
            <Typography variant="caption" color={'error'}>Home / 
                <a style={{color:"darkred"}} href="/">Trade Unions</a>
            </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TradeUnionTextHeader;
