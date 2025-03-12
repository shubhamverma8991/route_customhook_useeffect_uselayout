import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import Button from "@mui/material/Button";

function NavLinkButton({ to, children }) {
  const match = useMatch(to); // Check if the current URL matches the 'to' prop

  return (
    <Button
      color="inherit"
      component={NavLink}
      to={to}
      sx={{
        ...(match && {
          // Use 'match' instead of 'isActive'
          backgroundColor: "#000000",
          color: "#fff",
        }),
      }}
    >
      {children}
    </Button>
  );
}

export default NavLinkButton;
