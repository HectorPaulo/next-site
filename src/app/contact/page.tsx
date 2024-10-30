import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
export const metadata = {
    title: "Developer Group Innovation",
    description: "Contact us for any queries or feedback.",
};

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contacto</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image 
                    src="/helpDesk.png"
                    alt=""
                    fill={true}
                    className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="nombre" className={styles.input} />
                    <input type="email" placeholder="correo electrónico" className={styles.input} />
                    <textarea className={styles.textArea} placeholder="mensaje" cols={30} rows={10}></textarea>
                    <Button url="#" text="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default Contact;