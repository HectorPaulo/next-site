import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/button/Button";
import { items, Item } from "./data";
import { notFound } from "next/navigation";

type Params = {
    category: keyof typeof items;
};

const getData = (cat: keyof typeof items): Item[] | undefined => {
    const data = items[cat];

    if (data) {
        return data;
    }

    return undefined;
};

const Category = ({ params }: { params: Params }) => {
    const data = getData(params.category);

    if (!data) {
        return notFound();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}> {params.category} </h1>
            {data.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
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