import { Typography } from "@material-ui/core";
import React,{useState} from "react";


type Props = {
    title: string;
    genre: string;
    senario: string;
    recruitingCount: string;
    format: string;
    tool: string;
    textarea: string;
}

const Card: React.FC<Props> = ({title,genre,senario,recruitingCount,format,tool,textarea}) => {
    return (
        <div id="target-component">
            <Typography>{title}</Typography>
            <ul>
                <li>ジャンル：{genre}</li>
                <li>シナリオ：{senario}</li>
                <li>募集人数：{recruitingCount}</li>
                <li>形式：{format}</li>
                <li>使用ツール：{tool}</li>
                <li>その他：{textarea}</li>
            </ul>
        </div>
    );
}

export default Card;
