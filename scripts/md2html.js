// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import GithubSlugger from 'github-slugger';
import yargsParser from 'yargs-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageTitleMap = {
  GUIDE: 'User Guide',
  'GUIDE-zh': '用户指南',
  'GUIDE-ja': 'NiceTab 日本語ユーザーガイド',
  'GUIDE-ru': 'Руководство пользователя',
  README: 'README',
  'README-zh': 'README',
  'README-ja': 'NiceTab 日本語版',
  'README-ru': 'README',
  CONTRIBUTING: 'CONTRIBUTING',
  'CONTRIBUTING-zh': '贡献指南',
  'CONTRIBUTING-ru': 'Руководство по участию',
  CHANGELOG: 'CHANGELOG',
  'CHANGELOG-zh': '更新日志',
  ARCHITECTURE: 'Architecture',
  'ARCHITECTURE-ru': 'Архитектура',
};

function ensureGithubCss() {
  const source = path.resolve(__dirname, '../node_modules/github-markdown-css/github-markdown.css');
  const docsDir = path.resolve(__dirname, '../public/docs');
  fs.mkdirSync(docsDir, { recursive: true });
  if (fs.existsSync(source)) {
    fs.mkdirSync(path.join(docsDir, 'css'), { recursive: true });
    fs.copyFileSync(source, path.join(docsDir, 'css/github-markdown.css'));
  }
}

function wrapWithHtml({ title, bodyHtml, lang }) {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="./css/github-markdown.css" />
  <style>body{display:flex;justify-content:center;padding:20px;background:#fff}.markdown-body{box-sizing:border-box;min-width:200px;max-width:980px;width:100%;padding:45px}@media(max-width:767px){.markdown-body{padding:15px}}</style>
</head>
<body><article class="markdown-body">${bodyHtml}</article></body>
</html>`;
}

function collectReferencedMarkdownPaths(content, currentDir) {
  const results = new Set();
  const markdownLinkRegex = /\]\(([^\)]+?\.md)(#[^\)]*)?\)/gi;
  const htmlLinkRegex = /href=["']([^"']+?\.md)(#[^"']*)?["']/gi;
  for (const regex of [markdownLinkRegex, htmlLinkRegex]) {
    let match;
    while ((match = regex.exec(content))) results.add(path.resolve(currentDir, match[1]));
  }
  return [...results];
}

function rewriteMdLinksToHtml(html) {
  let result = html.replace(/href=("|')(.*?)(\1)/gi, (full, quote, url) => {
    const next = /\.md($|#)/i.test(url)
      ? url.replace(/\.md(#[^\s"'>)]*)?/i, (_match, fragment) => `.html${fragment ?? ''}`)
      : url;
    return `href=${quote}${next}${quote}`;
  });
  result = result.replace(/href=("|')#([^"']+)(\1)/gi, (full, quote, fragment) => {
    try { return `href=${quote}#${decodeURIComponent(fragment)}${quote}`; }
    catch { return full; }
  });
  return result;
}

function addGithubHeadingIds(html) {
  const slugger = new GithubSlugger();
  const decodeEntities = value => value
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  return html.replace(/<h([1-6])(\s[^>]*)?>([\s\S]*?)<\/h\1>/g, (match, level, attrs = '', inner) => {
    const text = decodeEntities(inner.replace(/<[^>]*>/g, '')).trim();
    const id = slugger.slug(text);
    const nextAttrs = /\sid=/i.test(attrs)
      ? attrs.replace(/\sid=("|')[^"']*(\1)/i, ` id="${id}"`)
      : `${attrs || ''} id="${id}"`;
    return `<h${level}${nextAttrs}>${inner}</h${level}>`;
  });
}

function convertSingleMarkdown(markdownPath, processed) {
  if (!fs.existsSync(markdownPath) || processed.has(markdownPath)) return;
  processed.add(markdownPath);
  const markdown = fs.readFileSync(markdownPath, 'utf8');
  const basename = path.basename(markdownPath).replace(/\.md$/i, '');
  const docsDir = path.resolve(__dirname, '../public/docs');
  fs.mkdirSync(docsDir, { recursive: true });
  const referenced = collectReferencedMarkdownPaths(markdown, path.dirname(markdownPath));
  marked.setOptions({ gfm: true, breaks: false, tables: true, pedantic: false, smartLists: true, smartypants: false });
  let bodyHtml = marked.parse(markdown);
  bodyHtml = rewriteMdLinksToHtml(addGithubHeadingIds(bodyHtml));
  const lang = basename.endsWith('-ja') ? 'ja' : basename.endsWith('-zh') ? 'zh-CN' : basename.endsWith('-ru') ? 'ru' : 'en';
  const output = wrapWithHtml({ title: pageTitleMap[basename] || 'ユーザーガイド', bodyHtml, lang });
  fs.writeFileSync(path.join(docsDir, `${basename}.html`), output, 'utf8');
  console.log(`Generated: ${path.join(docsDir, `${basename}.html`)}`);
  referenced.forEach(file => convertSingleMarkdown(file, processed));
}

function main() {
  ensureGithubCss();
  const args = yargsParser(process.argv.slice(2));
  const inputs = args._?.length ? args._ : ['GUIDE-zh.md', 'GUIDE-ja.md'];
  const processed = new Set();
  inputs.forEach(input => convertSingleMarkdown(path.resolve(__dirname, '..', input), processed));
}

main();
