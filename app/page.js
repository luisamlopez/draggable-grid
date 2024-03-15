import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";

export default function Home() {
  return (
    <main >
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
