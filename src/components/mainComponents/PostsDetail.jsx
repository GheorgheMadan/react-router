import axios from "axios";
import { useState, useEffect } from 'react';

// import della parte di ritorno parametro rotta FE
import { useParams } from "react-router-dom";

// aggiunta  uso link per paginazione (prev next dettagli)
import { Link } from "react-router-dom";

export default function PostsDetail() {
    // destructuring per ritornare l'id (proprietà dell'oggetto param)
    const { id } = useParams();

    // setto lo sato del componente 
    const [post, setPost] = useState({})

    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.error('operazione fallita', err))
    }

    useEffect(() => fetchPost(), [id])

    return (
        <>
            <section className="container-post">
                <div className="container-link-chiudi">
                    <Link to='/posts' className="pulsante">X</Link>
                </div>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.content}</p>
                <span>{post.tags ? post.tags.join(', ') : ''}</span>
                <div>
                    <Link to={`/posts/${parseInt(id) - 1}`} className='pulsante prev'>-</Link>
                    <Link to={`/posts/${parseInt(id) + 1} `} className='pulsante next'>+</Link>
                </div>
            </section>
        </>
    )
}