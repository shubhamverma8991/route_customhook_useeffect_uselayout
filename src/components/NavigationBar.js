import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Avatar, createTheme, ThemeProvider } from "@mui/material";
import NavLinkButton from "../common/NavLinkButton";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router";

// StyledBadge Definition
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function NavigationBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#808080",
      },
    },
  });

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
            Test Website
          </Box>
          <Box sx={{ pr: 2 }}>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
              <Avatar
                alt="Shubham Verma"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1741777284~exp=1741780884~hmac=ee0b62be7933abb97790311f03b4d373d80fc00392505cf4f500c2bfa3c24c6f&w=1380"
              />
            </StyledBadge>
          </Box>
          <NavLinkButton to="/">Home</NavLinkButton>
          <NavLinkButton to="/about">About</NavLinkButton>
          <NavLinkButton to="/dashboard">Dashboard</NavLinkButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavigationBar;
