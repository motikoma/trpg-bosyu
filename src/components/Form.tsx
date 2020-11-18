import React,{useState} from "react";
import html2canvas from "html2canvas";
import {makeStyles} from "@material-ui/core/styles";
import { TextField, Button, Grid, Box, Typography, Container } from "@material-ui/core";
import Card from "./Card";

// TODO: 更新したらバグるのを修正する。よくわからない...
// TODO: 見た目を整える：スタイルはHooks式で実装する
// TODO: テキストエリアに記載した改行を反映できるようにする
// TODO: 動的に行を追加できるようにする

const Form: React.FC<{}> = () => {

    // 画像を生成してダウンロードする
    const onClickExport = (): void => {
        const target = document.getElementById("target-component");
        html2canvas(target, {letterRendering: true, allowTaint: true, useCORS:true})
        .then((canvas)=>{
            const targetImageUri = canvas.toDataURL("img/png");
            saveAsImage(targetImageUri);
        })
    }

    // 画像のダウンロード機能
    const saveAsImage = (uri: string): void => {
        const downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = "component.png";
        downloadLink.click();
    }

    const [title, setTitle] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [senario, setSenario] = useState<string>("");
    const [recruitingCount, setRecruitingCount] = useState<string>("");
    const [format, setFormat] = useState<string>("");
    const [tool, setTool] = useState<string>("");
    const [textarea, setTextarea] = useState<string>("");

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const genreHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGenre(e.currentTarget.value);
    }

    const senarioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenario(e.currentTarget.value);
    }

    const recruitingCountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruitingCount(e.currentTarget.value);
    }

    const formatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormat(e.currentTarget.value);
    }

    const toolHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTool(e.currentTarget.value);
    }

    const textareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextarea(e.currentTarget.value);
    }

    return (
        <Container maxWidth="lg" fixed>
            <Box m={6}>
                <Typography variant="h2" component="h1" align="center">TRPG募集メーカー</Typography>
            </Box>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container item xs={12}>
                    <section>
                        <Box m={2}>
                            <TextField label="タイトル" variant="outlined" onChange={titleHandler} />
                        </Box>
                        <Box m={2}>
                            <TextField label="ジャンル" variant="outlined" onChange={genreHandler}  />
                        </Box>
                        <Box m={2}>
                            <TextField label="シナリオ" variant="outlined" onChange={senarioHandler}  />
                        </Box>
                        <Box m={2}>
                            <TextField label="募集人数" variant="outlined" onChange={recruitingCountHandler}  />
                        </Box>
                        <Box m={2}>
                            <TextField label="形式" variant="outlined" onChange={formatHandler}  />
                        </Box>
                        <Box m={2}>
                            <TextField label="使用ツール" variant="outlined" onChange={toolHandler}  />
                        </Box>
                        <Box m={2}>
                            <TextField label="その他" variant="outlined" multiline onChange={textareaHandler} />
                        </Box>
                        <Button variant="contained" color="primary" onClick={()=>{onClickExport()}}>画像ダウンロード</Button>
                    </section>
                </Grid>
                <Grid container item xs={12}>
                    <section>
                        <Card title={title} genre={genre} senario={senario} recruitingCount={recruitingCount} format={format} tool={tool} textarea={textarea} />
                    </section>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Form;