import * as path from 'path';
import enquirer from 'enquirer';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const response = await enquirer.prompt({
  type: 'input',
  name: 'pageName',
  message: 'What is your page name?',
  validate(value) {
    if (!value.trim()) {
      return 'please input page name';
    }
    return true;
  },
  result(v) {
    return `${v.trim()}`;
  },
});

async function isExist() {
  const pagesDir = path.join(__dirname, '../src/pages');
  const folders = await fs.readdir(pagesDir, { withFileTypes: true });
  const flag = folders.some((folder) => folder.isDirectory() && folder.name === response.pageName);
  if (flag) {
    return Promise.reject(`${response.pageName} page exist!!!`);
  }
  return Promise.resolve();
}

async function copyFolder(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  const srcDir = path.join(__dirname, '../src/pages/example');
  const destDir = path.join(__dirname, '../src/pages', response.pageName);

  try {
    await isExist();
    await copyFolder(srcDir, destDir);
    console.log(`Folder copied to: ${destDir}`);
  } catch (error) {
    console.error('Error copying folder:', error);
  }
}

main();
