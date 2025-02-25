import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
// PostsList.jsx
export default function PostsList() {

    // data contiene la lista degli articoli, inizialmente è l'array posts
    const [data, setData] = useState([])

    // Funzione per recuperare i dati dei post dal server
    function fetchPosts() {
        axios.get('http://localhost:3000/posts') // Effettua una richiesta HTTP GET all'endpoint specificato
            // con la funzione setData passiamo i dati al data
            .then((res => setData(res.data)))

            // Se la richiesta ha successo, aggiorna lo stato con i dati ricevuti
            .catch((err) => console.error("Errore nel fetch:", err)); // Se c'è un errore, lo stampa nella console
    }
    // useEffect viene usato per eseguire codice quando il componente viene montato
    useEffect(() => {
        fetchPosts(); // Chiama la funzione fetchPosts() appena il componente viene caricato
    }, []) // Il secondo argomento, un array vuoto [], fa sì che questa funzione venga eseguita solo al primo render


    // Questa funzione aggiorna lo stato formData quando l'utente compila i campi del modulo.
    const handleFormData = (e) => {
        // Se il campo è "tags", trasforma la stringa in un array 
        // e.target.name per sapere quale input è stato aggiornato.
        const value = e.target.name === 'tags'
            ?
            // Uso e.target.value per ottenere il nuovo testo scritto dall’utente.
            e.target.value.split(', ')
            // Altrimenti mantiene il valore normale (stringa)
            : e.target.value
        // current posts mantiene tutti i dati già presenti nel form // [e.target.name]: value Aggiorna solo il campo modificato
        setFormData((currentPosts) => ({ ...currentPosts, [e.target.name]: value }))
    };

    // Funzione che aggiunge un nuovo articolo alla lista quando l'utente invia il form
    const addArticle = (e) => {
        e.preventDefault(); // Evita il ricaricamento della pagina al submit del form

        // Effettua una richiesta POST per aggiungere un nuovo articolo sul server, passando i dati del form (formData)
        axios.post('http://localhost:3000/posts', formData)
            .then((res) => {
                // Una volta che la risposta è ricevuta con successo, aggiorniamo lo stato data
                // Aggiungiamo il nuovo articolo (res.data) alla lista esistente di articoli
                setData((currentPosts) => [...currentPosts, res.data])
            })
            .catch(err => console.log(err) // Se c'è un errore nella richiesta, lo stampiamo nella console
            )
        // All'invio del form questo lo resetta tornando allo stato iniziale
        setFormData(initialForm);
    };

    // Funzione per rimuovere un articolo dalla lista
    function deleteArticle(postId) {
        // Usa il metodo filter() per creare una nuova lista di articoli che non contenga l'articolo con l'ID specificato.
        const updatedArticles = data.filter((post) => {
            return post.id !== postId
        })
        axios.delete(`http://localhost:3000/posts/${postId}`)
            .then(res =>
                console.log(res),
                // Aggiorna lo stato con la nuova lista usando setData()
                setData(updatedArticles))
            .catch(err => console.log(err)
            )
    }

    return (
        <>
            <section>

                <Link to='create' className="pulsante">CREA UN NUOVO POST</Link>
                <h1>LISTA DEI POST</h1>
                {data.length === 0 ? <div className="not-found">Nessun post disponibile</div> :
                    <div className="container-cards">
                        {data.map((post) => (
                            <div className="card" key={post.id}>
                                <h2>{post.title}</h2>
                                <img src={post.image} alt={post.title} />
                                <p>{post.content}</p>
                                <span>{post.tags.join(', ')}</span><br />
                                {/* BUTTON CHE ELIMINA I POST  */}
                                <button onClick={() => deleteArticle(post.id)}>
                                    X
                                </button>
                            </div>

                        ))}
                    </div>
                }
            </section>
        </>
    )
}