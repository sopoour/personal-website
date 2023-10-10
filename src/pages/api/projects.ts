import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Project } from '@app/types';

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | { error: string }>,
) {
  try {
    const dirRelativeToPublicFolder = 'data/projects';
    const folderPath = path.resolve('./public', dirRelativeToPublicFolder);
    const files = fs.readdirSync(folderPath);
    const mergedData = files.map((file) => {
      // get for each file the filePath and the data from it
      const filePath = path.join(folderPath, file);
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    });

    res.status(200).json(mergedData);
  } catch (error) {
    console.error('Error merging JSON files:', error);
    res.status(500).json({ error: 'Error merging JSON files' });
  }
}
