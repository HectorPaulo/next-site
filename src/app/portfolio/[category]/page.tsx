import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/button/Button";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
    const data = items[cat];

    if (data) {
        return data;
    }

    return notFound();
};

const Category = ({params}) => {
    const data = getData(params.category);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}> {params.category} </h1>
            {data.map((item)=>(
                <div className={styles.item} key={item.id}>
                    <div className={StyleSheet.content}>
                        <h1 className={styles.title}>
                            {item.title}
                        </h1>
                        <p className={styles.desc}>
                            {item.desc}
                        </p>
                        <Button text="Ver más" url="#" />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image 
                            className={styles.img}
                            fill={true}
                            src={item.image}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Category;