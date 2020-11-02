import React,{useState} from "react";
import html2canvas from "html2canvas";
import {makeStyles} from "@material-ui/core/styles";
import { TextField, TextareaAutosize, Button } from "@material-ui/core";
import Card from "./Card";

// TODO: 画像ダウンロード機能を実装する
// TODO: 見た目を整える：スタイルはHooks式で実装する
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
        <>
            <section>
                <TextField label="タイトル" variant="outlined" onChange={titleHandler} />
                <TextField label="ジャンル" variant="outlined" onChange={genreHandler}  />
                <TextField label="シナリオ" variant="outlined" onChange={senarioHandler}  />
                <TextField label="募集人数" variant="outlined" onChange={recruitingCountHandler}  />
                <TextField label="形式" variant="outlined" onChange={formatHandler}  />
                <TextField label="使用ツール" variant="outlined" onChange={toolHandler}  />
                <TextareaAutosize aria-label="empty textarea" rowsMin={10} rowsMax={20} placeholder="その他" onChange={textareaHandler} />
                <Button variant="contained" color="primary" onClick={()=>{onClickExport()}}>画像ダウンロード</Button>
            </section>
            <section>
                <Card title={title} genre={genre} senario={senario} recruitingCount={recruitingCount} format={format} tool={tool} textarea={textarea} />
            </section>
        </>
    );
}

export default Form;