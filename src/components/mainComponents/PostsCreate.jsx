import axios from "axios"
import { useState } from 'react';
import { Link } from "react-router-dom";

// import navigate per navigazione programmatica dopo invio form
import { useNavigate } from "react-router-dom";

// PostsList.jsx
export default function PostsCreate() {

    // initialForm è un oggetto che rappresenta un articolo vuoto
    const initialForm = {
        title: '',
        image: '',
        content: '',
        tags: [],
    }

    // formData contiene i dati del nuovo post, inizialmente con un post vuoto
    // formData: Stato che contiene i dati dell’post che l'utente sta compilando
    const [formData, setFormData] = useState(initialForm)


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

    // utilizzo del navigate
    const navigate = useNavigate();

    // Funzione che aggiunge un nuovo articolo alla lista quando l'utente invia il form
    const addArticle = (e) => {
        e.preventDefault(); // Evita il ricaricamento della pagina al submit del form

        // Effettua una richiesta POST per aggiungere un nuovo articolo sul server, passando i dati del form (formData)
        axios.post('http://localhost:3000/posts', formData)
            .then((res) => {
                // Una volta che la risposta è ricevuta con successo, aggiorniamo lo stato data
                // Aggiungiamo il nuovo articolo (res.data) alla lista esistente di articoli
                // setData((currentPosts) => [...currentPosts, res.data])
                navigate('/posts')
            })
            .catch(err => console.log(err) // Se c'è un errore nella richiesta, lo stampiamo nella console
            )
        // All'invio del form questo lo resetta tornando allo stato iniziale
        setFormData(initialForm);
    };

    return (
        <>
            <section>
                <Link to='/posts' className="pulsante">Torna indietro</Link>
                <h1>Inserisci i dati del nuovo post</h1>
                {/* con onSubmit richiamo la funzione dell'invio del form */}
                <form onSubmit={addArticle}>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        placeholder="inserisci il titolo"
                        // Quando l'utente digita nel campo di input, la funzione handleFormData viene chiamata e aggiorna lo stato del form.
                        onChange={handleFormData}
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        placeholder="inserisci il link dell'immagine"
                        // Quando l'utente digita nel campo di input, la funzione handleFormData viene chiamata e aggiorna lo stato del form.
                        onChange={handleFormData}
                        required
                    />
                    <textarea
                        name="content"
                        placeholder="inserisci il contenuto"
                        value={formData.content}
                        // Quando l'utente digita nel campo di input, la funzione handleFormData viene chiamata e aggiorna lo stato del form.
                        onChange={handleFormData}
                        required
                    >
                    </textarea>
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        placeholder="inserisci i tag"
                        // Quando l'utente digita nel campo di input, la funzione handleFormData viene chiamata e aggiorna lo stato del form.
                        onChange={handleFormData}
                        required
                    />
                    <button
                        type="submit"
                    >INVIA
                    </button>
                </form >
            </section >
        </>
    )
}