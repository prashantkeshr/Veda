/**
 * Copies src/data/*.json to public/api/v1/ wrapped in a response envelope.
 * Run: node scripts/sync-api-data.mjs
 * Auto-run on: npm run dev, npm run build (via predev/prebuild hooks)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcDir = join(root, 'src', 'data');
const outDir = join(root, 'public', 'api', 'v1');

const VERSION = '1.0.0';
const SCHEMA_URL = '/Veda/api/v1/schema.json';

const ENTITIES = [
  { file: 'subjects.json',       entity: 'subject' },
  { file: 'topics.json',         entity: 'topic' },
  { file: 'resources.json',      entity: 'resource' },
  { file: 'questions.json',      entity: 'question' },
  { file: 'courses.json',        entity: 'course' },
  { file: 'exams.json',          entity: 'exam' },
  { file: 'learning-paths.json', entity: 'learning-path' },
];

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const index = { version: VERSION, generatedAt: '', endpoints: [] };

for (const { file, entity } of ENTITIES) {
  const raw = JSON.parse(readFileSync(join(srcDir, file), 'utf-8').replace(/^﻿/, ''));
  const envelope = {
    $schema: SCHEMA_URL,
    version: VERSION,
    entity,
    count: raw.length,
    generatedAt: new Date().toISOString(),
    data: raw,
  };
  writeFileSync(join(outDir, file), JSON.stringify(envelope, null, 2));
  index.endpoints.push({ entity, file, count: raw.length, path: `/Veda/api/v1/${file}` });
  console.log(`✓ ${file} (${raw.length} items)`);
}

index.generatedAt = new Date().toISOString();
writeFileSync(join(outDir, 'index.json'), JSON.stringify(index, null, 2));
console.log('✓ index.json');
console.log('\nAPI data synced → public/api/v1/');
