// pages/kids/[topic]/[lang].tsx
import { useEffect, useState } from 'react';
import fetchAllMarkdowns from '../../../lib/fetchMarkdowns';

interface ParsedMarkdownFile {
  topic: string;
  lang: string;
  filename: string;
  content: string;
  parsed: {
    html: string;
    reactComponent: React.ReactNode;
  };
}

export async function getStaticPaths(): Promise<{ paths: any[], fallback: boolean }> {
  const topics = ['Air Pollution Reduction', 'Animal Protection', 'Tree Preservation', 'Waste Reduction', 'Water Conservation'];
  const langs = ['en', 'fa'];

  return {
    paths: topics.flatMap(topic => langs.map(lang => ({ params: { topic, lang } }))),
    fallback: false,
  };
}

function KidsTopic({ markdowns }: { markdowns: ParsedMarkdownFile[] }): React.ReactElement {
  return (
    <div>
      <h1>{markdowns[0].topic}</h1>
      <ul>
        {markdowns.map((md, index) => (
          <li key={index}>
            <a href={`#${md.filename.replace('.tsx', '')}`}>{md.filename.replace('.tsx', '')}</a>
          </li>
        ))}
      </ul>

      {markdowns.map(md => (
        <article id={md.filename.replace('.tsx', '')} key={md.filename}>
          <h2>{md.filename.replace('.tsx', '')}</h2>
          {/* Render the React component */}
          {md.parsed.reactComponent}
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }: { params: { topic: string; lang: string } }): Promise<{ props: { markdowns: ParsedMarkdownFile[] } }> {
  const markdowns = await fetchAllMarkdowns('ainovelist', 'stories');
  
  const filteredMarkdowns = markdowns.filter(md => md.topic === params.topic && md.lang === params.lang);

  return {
    props: { markdowns: filteredMarkdowns },
  };
}

export default KidsTopic;
