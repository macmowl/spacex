import {useRouter} from 'next/router';

const Note = ({ note }) => {
    const router = useRouter();

    const handleDelete = async() => {
        const noteId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
                method: "DELETE"
            });
            router.push('/'); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={() => router.push('/')}>Back</button>
            <button className="btn--danger" onClick={handleDelete}>Delete</button>
        </div>
    )
};

export const getServerSideProps = async ({ query: {id} }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return {
        props: {
            note: data
        }
    };
};

export default Note
