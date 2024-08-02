import { Box, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocalImage from "../assets/white-btn.webp";

function RightUpperComp() {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"start"} gap={2}>
      <Typography variant="body1" align="center">
        INSTRUCTIONS
      </Typography>

      <Typography variant="body2" align="left">
        <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
        Enter the name of Trade Union. This name should be unique. Otherwise
        request will be rejected
      </Typography>

      <Typography variant="body2" align="left">
        <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
        Enter the registered address of the office of the trade union
      </Typography>

      <Typography variant="body2" align="left">
        <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
        Select the established date of the trade union by date picker{" "}
      </Typography>

      <img src={LocalImage} alt="Local illustration" style={{width:"300px"}}/>

    </Box>
  );
}

export default RightUpperComp;
