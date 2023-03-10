import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./linkbutton.module.css";

const LinkButton = ({ buttonText, link }) => {
  return (
    <Link style={{ textDecoration: "none" }} href={link} legacyBehavior>
      <div className={styles.container}>
        <a>
          <span>{buttonText}</span>
        </a>
      </div>
    </Link>
  );
};

export default LinkButton;

// sx={{
//   fontSize: "1.2rem",
//   color: "white",
//   width: "9.5rem",
//   height: "4rem",
//   background: "inherit",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: "4px",
//   transition: "0.3s",
//   "&:hover": {
//     border: "3px solid red",
//     inset: "-3px",
//     filter: "blur(1px)",
//   },
// }}
