import React, { useState } from "react";
import html2canvas from "html2canvas";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Button, Grid, Box } from "@material-ui/core";

// TODO: 更新したらバグるのを修正する。よくわからない...
// TODO: 見た目を整える：スタイルはHooks式で実装する
// TODO: テキストエリアに記載した改行を反映できるようにする
// TODO: 動的に行を追加できるようにする

const useStyles = makeStyles({
  textArea: {
    padding: "0px",
    "& .MuiOutlinedInput-multiline": {
      padding: "18.5px 9px",
    },
  },
  button: {
    textAlign: "center",
  },
});

type Props = {
  titleHandler;
  genreHandler;
  senarioHandler;
  recruitingCountHandler;
  formatHandler;
  toolHandler;
  textareaHandler;
};

const Form: React.FC<Props> = (props) => {
  const classes = useStyles();
  const {
    titleHandler,
    genreHandler,
    senarioHandler,
    recruitingCountHandler,
    formatHandler,
    toolHandler,
    textareaHandler,
  } = props;

  // 画像を生成してダウンロード
  const onClickExport = (): void => {
    const target = document.getElementById("target-component");
    html2canvas(target, {
      letterRendering: true,
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      const targetImageUri = canvas.toDataURL("img/png");
      saveAsImage(targetImageUri);
    });
  };

  // 画像のダウンロード関数
  const saveAsImage = (uri: string): void => {
    const downloadLink = document.createElement("a");
    downloadLink.href = uri;
    downloadLink.download = "component.png";
    downloadLink.click();
  };

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item>
        <Box m={2}>
          <TextField
            label="タイトル"
            variant="outlined"
            onChange={titleHandler}
          />
        </Box>
        <Box m={2}>
          <TextField
            label="ジャンル"
            variant="outlined"
            onChange={genreHandler}
          />
        </Box>
        <Box m={2}>
          <TextField
            label="シナリオ"
            variant="outlined"
            onChange={senarioHandler}
          />
        </Box>
        <Box m={2}>
          <TextField
            label="募集人数"
            variant="outlined"
            onChange={recruitingCountHandler}
          />
        </Box>
        <Box m={2}>
          <TextField label="形式" variant="outlined" onChange={formatHandler} />
        </Box>
        <Box m={2}>
          <TextField
            label="使用ツール"
            variant="outlined"
            onChange={toolHandler}
          />
        </Box>
        <Box m={2}>
          <TextField
            className={classes.textArea}
            label="その他"
            variant="outlined"
            multiline
            onChange={textareaHandler}
          />
        </Box>
        <Container className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onClickExport();
            }}
          >
            画像ダウンロード
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Form;
