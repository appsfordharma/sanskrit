import fs from 'fs/promises';
import { existsSync, mkdirSync } from 'node:fs';

/**
 *
 * @param param
 * @param param.fileName
 * @param param.jsonData
 * @returns {Promise<void>}
 */
export async function writeFile({
  fileName,
  jsonData,
}: {
  fileName: string;
  jsonData: string;
}): Promise<void> {
  const dir = `${__dirname}/data`;
  const path = `${__dirname}/data/${fileName}.json`;
  // console.log({ dir, path });

  if (existsSync(dir)) {
    return fs.writeFile(path, jsonData);
  }
  mkdirSync(dir);

  return writeFile({ fileName, jsonData });
}

/**
 *
 * @param param
 * @param param.fileName
 * @returns {Promise<string>}
 */
export async function readFile({
  fileName,
}: {
  fileName: string;
}): Promise<string> {
  return fs.readFile(`${__dirname}/data/${fileName}.json`, 'utf8');
}
