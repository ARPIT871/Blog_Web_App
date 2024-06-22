import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <Box sx={{ position: "sticky", marginTop: "20px" }}>
      <Box   width={"100%"} height={"100px"}>
        <Image className="ml-20" src={logo} alt="logo" width={"auto"} height={"auto"}></Image>
      </Box>
      <Box width={"100%"} height={"100px"} sx={{top:"0",position:"sticky"}}>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
