import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/draggable">

            Draggable
          </Link>
        </li>

        <li>
          <Link href="/pure">
            Pure
          </Link>
        </li>
      </ul>
    </main>
  );
}
