import React, { useState } from "react";
import Head from "next/head";
// import styles from "../../styles/Home.module.css";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import Card from "./../components/Card";
import Form from "./../components/Form";

export default function Home() {
  // カスタムフックでイベントを走らせる？
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [senario, setSenario] = useState<string>("");
  const [recruitingCount, setRecruitingCount] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [tool, setTool] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const genreHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.currentTarget.value);
  };

  const senarioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenario(e.currentTarget.value);
  };

  const recruitingCountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecruitingCount(e.currentTarget.value);
  };

  const formatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormat(e.currentTarget.value);
  };

  const toolHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTool(e.currentTarget.value);
  };

  const textareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.currentTarget.value);
  };

  return (
    <div>
      <Head>
        <title>TRPG募集メーカー</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg" fixed>
        <Box m={6}>
          <Typography variant="h2" component="h1" align="center">
            TRPG募集メーカー
          </Typography>
        </Box>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid container item xs={6}>
            <Form
              titleHandler={titleHandler}
              genreHandler={genreHandler}
              senarioHandler={senarioHandler}
              recruitingCountHandler={recruitingCountHandler}
              formatHandler={formatHandler}
              toolHandler={toolHandler}
              textareaHandler={textareaHandler}
            />
          </Grid>
          <Grid container item xs={6}>
            <Card
              title={title}
              genre={genre}
              senario={senario}
              recruitingCount={recruitingCount}
              format={format}
              tool={tool}
              textarea={textarea}
            />
          </Grid>
        </Grid>
      </Container>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
