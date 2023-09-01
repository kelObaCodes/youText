import styles from "./page.module.css";
import ParentContainer from "@/components/parentContainer";
export default function Home() {
    return (
        <main className={styles.main}>
            <ParentContainer />
        </main>
    );
}
