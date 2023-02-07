// eslint-disable-next-line import/no-extraneous-dependencies
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URL!);
client.connect();
export default client.db(process.env.DB_NAME!);
