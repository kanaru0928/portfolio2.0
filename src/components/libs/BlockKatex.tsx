import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

interface BlockKatexProps {
  math: string;
}

export default function BlockKatex({ math }: BlockKatexProps) {
  const markdown = `$$
  ${math}
  $$`;

  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {markdown}
      </ReactMarkdown>
    </>
  );
}
