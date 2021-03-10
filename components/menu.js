import Link from 'next/link';

export const Menu = () => {

    return(
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <Link href='/'>My notes</Link>
                    </li>
                    <li>
                        <Link href='/new'>Add note</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Menu;