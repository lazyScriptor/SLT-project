import { Box, Typography } from "@mui/material";
import React from "react";

function BottomFooter() {
  return (
    <Box
      sx={{
        height: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkred",
      }}
    >
      <Typography fontSize={10} color={"#9e9e9e"} align="center">
        Copyright @ 2023 Department of Labour. All Rights Recieved. Powered By
        SLT-DIGITAL
      </Typography>
    </Box>
  );
}

export default BottomFooter;
