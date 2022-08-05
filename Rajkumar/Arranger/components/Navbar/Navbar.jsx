import React from "react";
import ActiveLink from "../Activelink";
import styles from "./navBar.module.scss";
import Image from "next/image";
import Logo from "../../public/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <div className="logo" style={{ margin: "10px 30px" }}>
          <Image src={Logo} height={65} width={250} />
        </div>
        <ul className={styles.element_container}>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
          <ActiveLink href="/login">Login</ActiveLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
