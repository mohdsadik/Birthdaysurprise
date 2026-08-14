import { readFileSync } from 'node:fs';
const src = readFileSync('src/main.jsx','utf8');
const required = ['From Dua', 'to Nikah','10 January 2027','4:42 PM IST','Qur\'an 30:21','Qur\'an 25:74','This is only the first chapter'];
const missing = required.filter((item)=>!src.includes(item));
if (missing.length) { console.error(`Missing required story content: ${missing.join(', ')}`); process.exit(1); }
console.log('Required story content is present.');
