// Puts the server-rendered page into dist/index.html, so search engines
// and link previews see the content without running JavaScript.
import {readFile, rm, writeFile} from 'node:fs/promises';

const {render} = await import('../dist-ssr/entry-server.js');
const file = new URL('../dist/index.html', import.meta.url);
const html = await readFile(file, 'utf8');

if (!html.includes('<!--app-html-->')) {
  throw new Error('Prerender marker <!--app-html--> not found in dist/index.html');
}

await writeFile(file, html.replace('<!--app-html-->', render()));
await rm(new URL('../dist-ssr', import.meta.url), {recursive: true, force: true});
console.log('Prerendered dist/index.html');
