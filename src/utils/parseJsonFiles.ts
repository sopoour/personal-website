import fs from 'fs';
import path from 'path';

function parseJsonFiles<T>(dirRelativeToPublicFolder: string): T[] {
  const folderPath = path.resolve('./public', dirRelativeToPublicFolder);
  const files = fs.readdirSync(folderPath);
  return files.map((file) => {
    // get for each file the filePath and the data from it
    const filePath = path.join(folderPath, file);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  });
}

export default parseJsonFiles;
