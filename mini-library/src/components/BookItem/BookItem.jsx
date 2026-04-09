import './bookItem.css';

const BookItem = ({ book, larger = false }) => {
    return (
        <article 
            className={ larger ? 'book book--larger' : 'book' }
            style={{ backgroundColor : book.color }}
        >
            <div className="book__spine"></div>
            <div className="book__cover">
                <h2 className="book__title">{ book.title }</h2>
                <h3 className="book__author">{ book.author }</h3>
            </div>
        </article>
    )
}

export default BookItem;