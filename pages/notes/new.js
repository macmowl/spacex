import { useState } from 'react';
import { useRouter } from 'next/router';

const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' })
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        createNote();
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const createNote = async () => {
        try {
            const res = await fetch(`${process.env.URI}/api/notes`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/notes")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>Create note</h1>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    maxLength="40"
                />
                <input
                    required
                    type="text"
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    maxLength="140"
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default NewNote;