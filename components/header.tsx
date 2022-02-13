import Link from "next/link";
import { ROUTES } from "../lib/routes";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <ul className={styles.inlineList}>
        <li>
          <Link as={ROUTES.home()} href={ROUTES.home()}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link as={ROUTES.blog()} href={ROUTES.blog()}>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
