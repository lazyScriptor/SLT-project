import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneTwoToneIcon from "@mui/icons-material/PhoneTwoTone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
function TopHeader() {
  return (
    <Box
      display={"flex"}
      justifyContent={"start"}
      alignItems={"center"}
      sx={{ backgroundColor: "#d32f2f", width: "100vw", height: "30px" }}
    >
      <Box display={"flex"} width={"70%"} sx={{ ml: 3 }} gap={2}>
        <Typography
          variant="body2"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
        >
          <PhoneTwoToneIcon />
          0112 201 201
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
        >
          <EmailOutlinedIcon />
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
        >
          contacts@labourdept.gov.lk
        </Typography>
      </Box>
    </Box>
  );
}

export default TopHeader;
