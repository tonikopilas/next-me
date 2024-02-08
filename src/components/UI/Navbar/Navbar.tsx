import React from "react";
import "./Navbar.scss";
import Link from "next/link";
type Props = {};
const Navbar = (props: Props) => {
  return (
    <nav className="t-navbar">
      <div className="t-navbar__items">
        <Link href={"/"}>HOME</Link>
        <Link href={"/"}>PROGRAMMING</Link>
        <Link href={"/"}>MUSIC</Link>
        <Link href={"/"}>BLOG</Link>
      </div>
    </nav>
  );
};

export default Navbar;
