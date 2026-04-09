import './bookmarksPage.css';
import Icon from '../../components/Icon/Icon';
import { useBookmarks } from '../../hooks/useBookmarks';
import BookList from '../../components/BookList/BookList';

const BookmarksPage = () => {
    const { bookmarks } = useBookmarks();
    return (
        <main className="page">
            <div className="page__wrapper">
                <div className="page__top-container">
                    <h1 className="page__title">Bookmarks</h1>
                    <Icon path="/" type="fa-arrow-left" />
                </div>
                <BookList books={ bookmarks } />
            </div>
        </main>
    )
}

export default BookmarksPage;