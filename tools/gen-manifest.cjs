#!/usr/bin/env node

const crypto = require('crypto');
const fs = require('fs');

const outfile = process.argv[2];
if (!outfile) throw new Error('Usage: gen-manifest <outfile>');

const appinfo = require('../assets/appinfo.json');
const ipkfile = `${appinfo.id}_${appinfo.version}_all.ipk`;
const ipkhash = crypto
  .createHash('sha256')
  .update(fs.readFileSync(ipkfile))
  .digest('hex');

fs.writeFileSync(
  outfile,
  JSON.stringify({
    id: appinfo.id,
    version: appinfo.version,
    type: appinfo.type,
    title: appinfo.title,
    iconUri:
      'https://raw.githubusercontent.com/DjVreditel/meta-webos/main/assets/largeIcon.png',
    sourceUrl: 'https://github.com/DjVreditel/meta-webos',
    rootRequired: false,
    ipkUrl: ipkfile,
    ipkHash: {
      sha256: ipkhash
    }
  })
);
