import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button"; // Adjust the path as necessary

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Mejores diseños para tus productos digitales.
        </h1>
        <p className={styles.desc}>
          Cambiando ideas con la realidad. Traemos a nuestro equipo en la mejor industria del software.
        </p>
        <Button url="/portfolio" text="Ver nuestros trabajos" />
      </div>
      <div className={styles.item}>
        <Image
          src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.img}
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}
