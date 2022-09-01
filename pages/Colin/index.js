import Link from "next/link";
import Product from "../../Components/ProductsList"
import {products} from "../../Components/data"
import styles from "../../styles/projects.module.css"
import Head from "next/head";

const Colin = () => {
    return ( 
        <>
        <Head>
        <title>Colin | Projects</title>
        <meta name="keywords" content="Colin Decorce"/>
        </Head>
        <div className={styles.pl}>
        <div className={styles.plTexts}>
            <div className={styles.plTitle}> Create & inspire. It{"'"}s Colin</div>
            <p className={styles.plDesc}>
            Projects Colin has worked on, click on the Projects to check them out.
            </p>
        </div>
        <div className={styles.plList}>
        {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
        ))}
        </div>
      </div>
      </>
     );
}
 
export default Colin;