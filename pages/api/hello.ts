// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/mongo/db';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { FindCursor, WithId } from 'mongodb';

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const logs = await db.collection('logs').find().toArray();
  console.log(db.databaseName);

  res.status(200).json(logs);
}
