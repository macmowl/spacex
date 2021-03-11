import Link from 'next/link';

export const Menu = () => {

    return(
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <Link href='/'>
                            <a>My notes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/new'>
                            <a>Add note</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Menu;