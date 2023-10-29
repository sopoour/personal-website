import { NextApiRequest, NextApiResponse } from 'next';
import { Experience } from '@app/types';
import parseJsonFiles from '@app/utils/parseJsonFiles';

export default async function getExperiences(
  req: NextApiRequest,
  res: NextApiResponse<Experience[] | { error: string }>,
) {
  try {
    const mergedData = parseJsonFiles<Experience>('data/experiences').sort((a, b) =>
      new Date(a.date.startDate) < new Date(b.date.startDate)
        ? 1
        : new Date(a.date.startDate) > new Date(b.date.startDate)
        ? -1
        : 0,
    );

    res.status(200).json(mergedData);
  } catch (error) {
    console.error('Error merging JSON files:', error);
    res.status(500).json({ error: 'Error merging JSON files' });
  }
}
