// thinking v3: hello once more; the batch of orders finally filled the slot.
// The line below is the whole error dialog: the file is locked by another process.
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY = 'Cannot delete file: it is being used by another process, specifically a Python script you forgot you started three days ago.';

// Own directory, so a relative output path still resolves somewhere predictable.
const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = resolve(here, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'entry.txt'), ENTRY, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(ENTRY, 'utf8')} bytes`);
