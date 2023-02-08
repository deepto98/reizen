import { TravelLogs } from '@/mongo/models/TravelLog';
import TravelLogForm from '@/components/TravelLogForm';
import styles from './page.module.css';

// DB Querying server side
export default async function Home() {
  const logs = await TravelLogs.find().toArray();

  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline">Reizen</h1>
      <h2>{logs.length} entries in db</h2>
      {logs.map((log) => (
        <div key={log._id.toString()}>{log.title}</div>
      ))}
      <TravelLogForm />
    </main>
  );
}
