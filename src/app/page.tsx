import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
return (
    <main className={styles.main}>
        <h1>
            Reno High Schedule Mapper
        </h1>
        <div>
            <Image
                src="/map-piece1.svg"
                alt="Basement Map Piece"
                width={700}
                height={300}
                priority
            />
        </div>
        <h2>
            Coming Soon!
        </h2>
        <p>
            Not endorsed or supported by Reno High School or the Washoe County School District
        </p>
    </main>
)
}
