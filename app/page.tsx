import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro sequi natus quis cupiditate? Iste blanditiis autem praesentium aut asperiores? Nobis provident cum dicta, cupiditate accusantium dolore impedit animi quibusdam?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro sequi natus quis cupiditate? Iste blanditiis autem praesentium aut asperiores? Nobis provident cum dicta, cupiditate accusantium dolore impedit animi quibusdam?</p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
  );
}
