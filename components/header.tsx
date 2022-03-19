import { useTheme } from "next-themes";
import Link from "next/link";
import { ROUTES } from "../lib/routes";
import styles from "./header.module.css";

export default function Header() {
  const {setTheme, theme} = useTheme()
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
            <a>Blogs</a>
          </Link>
        </li>
        <li>
          <Link as={ROUTES.chart()} href={ROUTES.chart()}>
            <a>Chart</a>
          </Link>
        </li>
        <button
          type="button"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? 'Light' : 'Dark'}
        </button>
      </ul>
    </div>
  );
}
