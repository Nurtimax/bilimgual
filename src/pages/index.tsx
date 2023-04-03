import MainLayout from '../layout'
import styles from '../styles/Home.module.css'

export default function Home() {
   return (
      <div className={styles.container}>
         <MainLayout>
            <h1>Hello bilingual</h1>
         </MainLayout>
      </div>
   )
}
