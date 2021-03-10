import { useState } from 'react';
import { useRouter } from 'next/router';

const EditNote = ({ note }) => {
    const [form, setForm] = useState({ title: note.title, description: note.description })
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateNote();
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const updateNote = async () => {
        try {
            const res = await fetch(`${process.env.URI}/api/notes/${note._id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>Update note</h1>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    maxLength="40"
                />
                <input
                    required
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    maxLength="140"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export const getServerSideProps = async ({query: {id}}) => {
    const res = await fetch(`${process.env.URI}/api/notes/${id}`);
    const { data } = await res.json();

    return {
        props: {
            note: data
        }
    };
}

export default EditNote;