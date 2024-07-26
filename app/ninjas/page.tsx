import styles from "@/styles/Ninjas.module.css";

interface Ninja {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

async function getData(): Promise<Ninja[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Ninjas() {
  const ninjas: Ninja[] = await getData();

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}