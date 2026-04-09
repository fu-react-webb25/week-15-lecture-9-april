import { useBookmarks } from '../../hooks/useBookmarks';
import Button from '../Button/Button';
import './bookDetails.css';

const BookDetails = ({ book }) => {
    const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

    const isBookmarked = (id) => {
        if(bookmarks.some(book => book.id === id)) return true;
        else return false;
    }

    return (
        <article className="details">
            <div className="details__titles">
                <h1 className="details__title">{ book.title }</h1>
                <h2 className="details__author">{ book.author }</h2>
            </div>
            <p className="details__plot">{ book.plot }</p>
            <div className="details__info">
                <p className="details__text">
                    <span className="details__bold">Audience:</span>
                    { book.audience }
                </p>
                <p className="details__text">
                    <span className="details__bold">First Published:</span>
                    { book.year }
                </p>
                <p className="details__text">
                    <span className="details__bold">Pages:</span>
                    { book.pages }
                </p>
                <p className="details__text">
                    <span className="details__bold">Publisher:</span>
                    { book.publisher }
                </p>
            </div>
            {
                isBookmarked(book.id)
                ? <Button onClick={ () => removeBookmark(book.id) } text="Read it, loved it!" />
                : <Button onClick={ () => addBookmark(book) } text="Oh, I want to read it!" />
            }
        </article>
    )
}

export default BookDetails;