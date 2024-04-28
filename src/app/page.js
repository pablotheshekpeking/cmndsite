import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div style={{backgroundColor: '#FEFBF5'}}>
    <Hero />
    </div>
  );
}
