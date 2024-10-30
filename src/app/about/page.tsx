import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                fill={true} 
                alt="" 
                className={styles.img} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Software y Salud</h1>
                    <h2 className={styles.imgDesc}>Pequeños pasos para grandes proyectos.</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                <h1 className={styles.title}>¿Qué hacemos nosotros¿</h1>
                <p className={styles.desc}>Una empresa de desarrollo de software con 34 años de experiencia en la industria.
                <br />
                <br />
                Nuestros expertos ayudan a las empresas medianas y grandes a mejorar sus procesos de negocio y a implementar soluciones de software personalizadas. Nuestros servicios incluyen consultoría, desarrollo de software, pruebas y soporte. </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>¿Qué hacemos¿</h1>
                    <p className={styles.desc}>
                        Hemos establecido y seguimos rigurosamente un programa de calidad que garantiza que nuestros productos y servicios cumplan con los más altos estándares de calidad. Nuestro equipo de expertos en desarrollo de software trabaja en estrecha colaboración con nuestros clientes para garantizar que sus necesidades y expectativas se cumplan en todo momento.
                        <br />
                        <br /> - Sitios web dinámicos
                        <br />
                        <br /> - Rápido y amigable
                        <br />
                        <br /> - Aplicaciones móviles
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About;