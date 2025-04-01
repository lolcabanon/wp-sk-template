#!/usr/bin/env node

/**
 * This is a script to bump plugin version in PHP file according to root package.json version.
 * It runs when `pnpm version` command is executed (see root package.json `version` script)
 */

const fs = require('fs');
const path = require('path');

const [, , sourceFile, _incrementType = 1] = process.argv;

if (!sourceFile || !_incrementType) {
  console.error(
    'Error: both sourceFile and incrementType arguments are required.'
  );
  process.exit(1);
}

function bumper(sourceFile, incrementType) {
  console.log('bumping...', process.env.npm_package_version);

  const filePath = path.join(process.cwd(), sourceFile);
  let file;

  try {
    file = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error('Error reading file:', err);
    return;
  }

  const versionLine = file.match(/Version:\s*(\d+\.\d+\.\d+)/);
  if (!versionLine) {
    console.error(`Version not found in ${sourceFile}`);
    return;
  }

  let [major, minor, patch] = versionLine[1].split('.').map(Number);
  if (incrementType === 'major') {
    major++;
    minor = 0;
    patch = 0;
  } else if (incrementType === 'minor') {
    minor++;
    patch = 0;
  } else if (incrementType === 'patch') {
    patch++;
  }

  const newVersion =
    process.env.npm_package_version ?? `${major}.${minor}.${patch}`;

  file = file.replace(/(Version:\s*)\d+\.\d+\.\d+/, `$1${newVersion}`);

  try {
    fs.writeFileSync(filePath, file);
  } catch (err) {
    console.error('Error writing file:', err);
    return;
  }

  return newVersion;
}

bumper(sourceFile, _incrementType);
