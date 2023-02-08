// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  TravelLogs,
  TravelLog,
  TravelLogWithId,
} from '@/mongo/models/TravelLog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    TravelLogWithId | TravelLogWithId[] | { message: string }
  >
) {
  try {
    switch (req.method) {
      //  Route to create a new log
      case 'POST': {
        // Validate schema of req body
        const validatedLog = await TravelLog.parseAsync(req.body);
        const insertResult = await TravelLogs.insertOne(req.body);
        return res.status(200).json({
          _id: insertResult.insertedId,
          ...validatedLog,
        });
      }
      case 'GET': {
        const logs = await TravelLogs.find().toArray();
        return res.status(200).json(logs);
      }
      default: {
        return res.status(405).json({ message: 'Method Not Supported' });
      }
    }
  } catch (e) {
    const error = e as Error;
    return res.status(500).json({
      message: error.message,
    });
  }
}
