import LinkButton from "@/components/buttons/Linkbutton/LinkButton";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: {
          xl: "3rem 7rem",
          lg: "3rem 5.5rem",
          md: "2.5rem 3.5rem",
          sm: "2rem 2rem",
          xs: "2rem 0.5rem",
        },
      }}
    >
      <AppBar
        sx={{
          position: "sticky",
          backgroundColor: "inherit",
          boxShadow: "5px 9px 14px -1px rgba(0,0,0,0.6)",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            p: "0.8rem 1.2rem",
          }}
        >
          <Box
            sx={{
              width: "8%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={48}
                height={48}
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            </Link>
          </Box>

          {!isMobile ? (
            <Box
              sx={{
                width: "75%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <LinkButton buttonText="Home" link="/" />
              <LinkButton buttonText="About Me" link="/about-me" />
              <LinkButton buttonText="Experiences" link="/experiences" />
              <LinkButton buttonText="Skills" link="/skills" />
              <LinkButton buttonText="Projects" link="/projects" />
              <LinkButton buttonText="Testimonials" link="/testimonials" />
              <LinkButton buttonText="Resume" link="/resume" />
              <LinkButton buttonText="Blogs" link="/blogs" />
              <LinkButton buttonText="Contact Me" link="/contact-me" />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </AppBar>

      {children}
    </Box>
  );
};

export default MainLayout;

// const Navbar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           My App
//         </Typography>
//         {isMobile ? (
//           <IconButton onClick={handleOpen} color="inherit">
//             <MenuIcon />
//           </IconButton>
//         ) : (
//           <div>
//             <Button color="inherit">Home</Button>
//             <Button color="inherit">About</Button>
//             <Button color="inherit">Contact</Button>
//           </div>
//         )}
//       </Toolbar>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Menu</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Please select an option:
//           </DialogContentText>
//           <List>
//             <ListItem button onClick={handleClose}>
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem button onClick={handleClose}>
//               <ListItemText primary="About" />
//             </ListItem>
//             <ListItem button onClick={handleClose}>
//               <ListItemText primary="Contact" />
//             </ListItem>
//           </List>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </AppBar>
//   );
// };

// export default Navbar;
