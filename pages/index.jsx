import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Contact from "./contact";
import Link from "next/link";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title> My Portfolio | Home</title>
        <meta name="description" content="Al Rashid Towmir's Portfolio App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/top-icon.png" />
      </Head>
      <main className={styles.main}>
        <Box sx={{}}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            repellendus aliquam minima assumenda! Voluptatibus ipsam recusandae
            laboriosam repudiandae earum blanditiis a qui iusto ea.
          </h1>
        </Box>
      </main>
    </>
  );
}
