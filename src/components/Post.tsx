"use client";
import Bar from "./Bar";
import SmallBar from "./SmallBar";
import type { IMetadata } from "../lib/interfaces/IMetadata";
import type { Element } from "mdx/types";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export default function Post({ metadata, content }: { metadata: IMetadata, content: Element }) {
    useEffect(() => {
        hljs.highlightAll();
    });

    return (
        <>
            <Bar />
            <h1>
                {metadata.title}
            </h1>
            <h4>
                {metadata.date}
            </h4>
            <SmallBar />
            <br />
            <div className="text-base/8">
                {content}
            </div>
            <br />
            <Bar />
        </>
    );
}
