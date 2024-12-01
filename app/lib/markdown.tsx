// lib/markdown.tsx
import React from 'react';
import remarkParse from 'remark-parse';
// import remarkReact from 'remark-react';
import remarkHtml from 'remark-html';
// import remarkTypescript from 'remark-typescript';
import { unified } from 'unified';

interface ParsedMarkdown {
  html: string;
  reactComponent: React.ReactNode;
}

export async function parseMarkdown(markdownContent: string): Promise<ParsedMarkdown> {
  const processor = unified()
    .use(remarkParse)
    // .use(remarkTypescript)
    // .use(remarkReact)
    ;

  const result = await processor.process(markdownContent);
  
  const htmlProcessor = unified().use(remarkHtml);
  const htmlResult = await htmlProcessor.process(result.value);

  return {
    html: String(htmlResult),
    reactComponent: result.result,
  };
}

export default parseMarkdown;
