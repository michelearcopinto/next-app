import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>ciao</p>
      <Link href={"/about"}>About</Link>
    </>
  );
}
