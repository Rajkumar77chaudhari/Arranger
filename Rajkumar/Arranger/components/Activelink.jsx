import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar/navBar.module.scss";

function ActiveLink({ children, href }) {
  const router = useRouter();

  const activeColor =
    router.asPath === href
      ? {
          boxShadow: "2px 1px 5px black",
          backgroundColor: "#faf7ff",
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "35px",
          padding: "10px",
          margin: "10px 17px",
          width: "112px",
          borderRadius: "20px",
        }
      : { color: "black" };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const style = {
    color: "black",
    listStyle: "none",
    textDecoration: "none",
    fontSize: "20px",
  };

  return (
    <Link href={href}>
      <li style={activeColor} onClick={handleClick} className={styles.element}>
        <a style={style}>{children}</a>
      </li>
    </Link>
  );
}

export default ActiveLink;
