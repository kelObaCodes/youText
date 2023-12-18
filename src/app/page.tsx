import styles from "./page.module.css";
import ParentContainer from "../components/ParentContainer";
import {  NotificationProvider } from '../components/Notifications';
import TextProvider  from "@/provider/TextProvider";

export default function Home() {
    return (
        <TextProvider>

        <NotificationProvider>
        <main className={styles.main}>
            <ParentContainer />

        </main>
        </NotificationProvider>
        </TextProvider>

    );
}
