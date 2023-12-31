import { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '@app/types';
import parseJsonFiles from '@app/utils/parseJsonFiles';

export default async function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | { error: string }>,
) {
  try {
    const mergedData = parseJsonFiles<Project>('data/projects').sort((a, b) =>
      new Date(a.date) < new Date(b.date) ? 1 : new Date(a.date) > new Date(b.date) ? -1 : 0,
    );

    res.status(200).json(mergedData);
  } catch (error) {
    console.error('Error merging JSON files:', error);
    res.status(500).json({ error: 'Error merging JSON files' });
  }
}
