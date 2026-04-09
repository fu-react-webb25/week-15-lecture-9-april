import { useEffect } from 'react';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import './libraryPage.css';
import BookList from '../../components/BookList/BookList';
import Icon from '../../components/Icon/Icon';

const LibraryPage = () => {
    const { books, isLoading, isError } = useFetchBooks();

    useEffect(() => {
        console.log(books);
    }, [books]);

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Something went wrong...</p>

    return (
        <main className="page">
            <div className="page__wrapper">
                <div className="page__top-container">
                    <h1 className="page__title">8 Classic Childrens Books</h1>
                    <Icon path="/bookmarks" type="fa-bookmark" />
                </div>
                <BookList books={ books } />
            </div>
        </main>
    )
}

export default LibraryPage;