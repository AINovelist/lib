// lib/fetchMarkdowns.tsx
import fs from 'fs/promises';
import path from 'path';
import { getFilesFromRepo } from './github';
import parseMarkdown from './markdown';

interface ParsedMarkdownFile {
  topic: string;
  lang: string;
  filename: string;
  content: string;
  parsed: ParsedMarkdown;
}

async function fetchAllMarkdowns(repoOwner: string, repoName: string): Promise<ParsedMarkdownFile[]> {
  // ... (same implementation as before)
}

export default fetchAllMarkdowns;
