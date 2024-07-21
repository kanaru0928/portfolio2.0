import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

interface InlineKatexProps {
  math: string;
}

export default function InlineKatex({ math }: InlineKatexProps) {
  const markdown = `$${math}$`;
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {markdown}
    </ReactMarkdown>
  );
}
