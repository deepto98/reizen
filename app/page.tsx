import { TravelLogs } from '@/mongo/models/TravelLog';
import styles from './page.module.css';

// DB Querying server side
export default async function Home() {
  const logs = await TravelLogs.find().toArray();

  return (
    <main className={styles.main}>
      <h1>Reizen</h1>
      <h2>{logs.length} entries in db</h2>
      {logs.map((log) => (
        <div key={log._id.toString()}>{log.title}</div>
      ))}
    </main>
  );
}
