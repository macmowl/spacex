import Link from 'next/link';
import noteStyles from '../styles/note.module.scss';
import { NextSeo } from 'next-seo';

export const Index = ({ notes }) => {
    return (
        <div className="container">
            <NextSeo 
                title="SpaceX notes"
            />
            <h2>My SpaceX notes</h2>
            <div>
                {notes.map(note => (
                    <div key={note._id} className={noteStyles.card}>
                        <h3 className={noteStyles.card__header}>
                            <Link href={`/${note._id}`}>
                                {note.title}
                            </Link>
                        </h3>
                        <div className={noteStyles.card__buttons}>
                            <Link href={`/${note._id}`}>
                                <button className={noteStyles.btnView}>View</button>
                            </Link>
                            <Link href={`/${note._id}/edit`}>
                                <button className={noteStyles.btnDanger}>Edit</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.URI}/api/notes`);
    const { data } = await res.json();

    return {
        props: {
            notes: data
        }
    };
}

export default Index;