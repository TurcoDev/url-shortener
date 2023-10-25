import getUrls from "@/app/db/getUrls";
import styles from '../styles/Home.module.css'


export default async function Page() {

  const listUrls = await getUrls();

  const listItems = listUrls.map((urlObj, index) => {
    return <li className={styles.li} key={index}><a href={urlObj.url}>{urlObj.short}</a> </li>
  });

  return <ul className={styles.ul}>{listItems}</ul>;

}