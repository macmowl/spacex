import Link from 'next/link';
import navStyles from '../styles/menu.module.scss';

export const Menu = () => {

    return(
        <>
            <nav className={navStyles.nav}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/feed/1'>Feeds</Link>
                    </li>
                    <li>
                        <Link href='/notes'>My notes</Link>
                    </li>
                    <li>
                        <Link href='/notes/new'>Add note</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Menu;