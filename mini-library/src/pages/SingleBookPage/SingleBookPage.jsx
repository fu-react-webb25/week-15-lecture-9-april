import { useEffect, useState } from 'react';
import './singleBookPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import Icon from '../../components/Icon/Icon';
import BookItem from '../../components/BookItem/BookItem';
import BookDetails from '../../components/BookDetails/BookDetails';

const SingleBookPage = () => {
    const [activeBook, setActiveBook] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const { books, isLoading, isError } = useFetchBooks();
    useEffect(() => {
        if(books) {
            const book = books.find(b => b.id === Number(id));
            setActiveBook(book);
        }
    }, [id, books]);

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Something went wrong...</p>

    return (
        <main className="page single-page">
            <div className="page__wrapper">
                <Icon path={null} type="fa-arrow-left" onClick={ () => navigate(-1)} />
                <section className="single-page__book-container">
                    {
                        activeBook && <BookItem 
                            book={ activeBook }
                            larger={ true }
                        />
                    }
                    {
                        activeBook && <BookDetails
                            book={ activeBook }
                        />
                    }
                </section>
            </div>
        </main>
    )
}

export default SingleBookPage;