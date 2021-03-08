import { useRouter } from 'next/router';
import styles from '../styles/menu.module.css';

export const Menu = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feeds</div>
        </div>
    )
};