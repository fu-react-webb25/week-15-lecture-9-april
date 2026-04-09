import BookItem from '../BookItem/BookItem';
import './bookList.css';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return <Link
                        className="book-list__link"
                        key={ book.id }
                        to={`/books/${book.id}`}
                    >
                        <BookItem 
                            book={ book }
                        />
                    </Link>
                })
            }
        </ul>
    )
}

export default BookList;