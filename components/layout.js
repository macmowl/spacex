import styles from '../styles/layout.module.scss';
import Menu from './menu';
import { NextSeo } from 'next-seo';

const layout = ({ children }) => {
    return (
        <>
            <NextSeo 
                title="SpaceX News"
                description="The best place to keep an eye to the sky"
            />
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
