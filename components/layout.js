import styles from '../styles/layout.module.scss';
import Menu from './menu';
import Head from 'next/head';

const layout = ({ children }) => {
    return (
        <>
            <Head >
                <title>SpaceX Notes</title>
                <meta name="description" content="The best place to keep an eye to the sky" />
                <meta name="keywords" content="notes, workflow" />
            </Head>
            <Menu />
            <div className={styles.container}>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default layout
