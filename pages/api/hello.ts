// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/mongo/db';
import { TravelLogs } from '@/mongo/models/TravelLog';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { FindCursor, WithId } from 'mongodb';

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const logs = await TravelLogs.find().toArray();
  console.log(db.databaseName);

  res.status(200).json(logs);
}
