import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    padding: 20,
    wordWrap: "break-word",
  },
});

type Props = {
  title: string;
  genre: string;
  senario: string;
  recruitingCount: string;
  format: string;
  tool: string;
  textarea: string;
};

const Card: React.FC<Props> = ({
  title,
  genre,
  senario,
  recruitingCount,
  format,
  tool,
  textarea,
}) => {
  const classes = useStyles();
  return (
    <div id="target-component" className={classes.card}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        {title ? title : "タイトル"}
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={`ジャンル：${genre}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`シナリオ：${senario}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`募集人数：${recruitingCount}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`形式：${format}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`使用ツール：${tool}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`その他：${textarea}`} />
        </ListItem>
      </List>
    </div>
  );
};

export default Card;
