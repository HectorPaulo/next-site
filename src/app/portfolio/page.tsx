import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Seleccionar una galería</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations" className={styles.item}>
                <span className={styles.title}>Ilustraciones</span>
                </Link>
                <Link href="/portfolio/websites" className={styles.item}>
                <span className={styles.title}>Sitios web</span>
                </Link>
                <Link href="/portfolio/applications" className={styles.item}>
                <span className={styles.title}>Aplicaciones</span>
                </Link>
            </div>
        </div>
    );
}

export default Portfolio;