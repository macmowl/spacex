import {useRouter} from 'next/router';
import Head from 'next/head';

const Note = ({ note }) => {
    const router = useRouter();

    const handleDelete = async() => {
        const noteId = router.query.id;
        try {
            const deleted = await fetch(`/api/notes/${noteId}`, {
                method: "DELETE"
            });
            router.push('/'); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <Head>
                <title>Note: {note.title}</title>
            </Head>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={() => router.push('/')}>Back</button>
            <button className="btn--danger" onClick={handleDelete}>Delete</button>
        </div>
    )
};

export const getServerSideProps = async ({ query: {id} }) => {
    const res = await fetch(`${process.env.URI}/api/notes/${id}`);
    const { data } = await res.json();

    return {
        props: {
            note: data
        }
    };
};

export default Note
