"use client";
import styles from "./page.module.css";
import ParentContainer from "../components/ParentContainer";
import {  NotificationProvider } from '../components/Notifications';

export default function Home() {
    return (
        <NotificationProvider>
        <main className={styles.main}>
            <ParentContainer />

        </main>
        </NotificationProvider>
    );
}
