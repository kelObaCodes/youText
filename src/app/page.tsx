import Image from 'next/image'
import styles from './page.module.css'
import WelcomeView from '@/components/welcome'
export default function Home() {
  return (
    <main className={styles.main}>
     <WelcomeView/>
    </main>
  )
}
