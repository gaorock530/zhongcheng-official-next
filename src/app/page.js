import Image from 'next/image'
import styles from './Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>新乡市众城保障性住房经营管理有限公司</title>
      <meta name="description" content="新乡市众城保障性住房经营管理有限公司" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        <img src="/logo_logo.png" width="100px"/>
        众城保障房
      </h1>

      <div className={styles.grid}>
        <a className={styles.card}>
          <img src="/pic2.jpg" className={styles.image}/>
          <p>西苑丽景小区</p>
        </a>

        <a className={styles.card}>
          <img src="/pic6.jpg" className={styles.image}/>
          <p>荣源小区</p>
        </a>
        <a className={styles.card}>
          <img src="/pic4.jpg" className={styles.image}/>
          <p>乔谢小区</p>
        </a>
        <a className={styles.card}>
          <img src="/pic5.jpg" className={styles.image}/>
          <p>新牧湾小区</p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <p>新乡市众城保障性住房经营管理有限公司 © 2024 版权所有</p>
      <p><a
        href="https://beian.miit.gov.cn"
        target="_blank"
        rel="noopener noreferrer"
      >
        豫ICP备2020034873号-2
      </a>
      <a href='https://beian.mps.gov.cn/#/query/webSearch'><img src="/beian.png" width="16" />豫公网安备41070202001303号</a></p>
    </footer>
  </div>
  )
}

// 218.29.57.190 - static server ip