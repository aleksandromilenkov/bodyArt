import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "30px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: { xs: "none" },
    }}
    px="20px"
  >
    <Link to="/">
      <img src={Logo} alt="logo" className="logoSizeSmall" />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      sx={{
        gap: { xs: "30px" },
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
        className="links"
      >
        Home
      </Link>
      <a
        className="links"
        href="#exercises"
        style={{ textDecoration: "none", color: "#3A1212" }}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
