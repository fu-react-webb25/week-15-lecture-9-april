import { useEffect, useState } from 'react';

export const useBookmarks = () => {
    const [bookmarks, setBookmarks] = useState(() => {
        const stored = localStorage.getItem('bookmarks');
        return JSON.parse(stored) || [];
    });

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const addBookmark = (book) => {
        setBookmarks(prev => [...prev, book]);
    }

    const removeBookmark = (id) => {
        const filtered = bookmarks.filter(book => book.id !== id);
        setBookmarks(filtered);
    }

    return { bookmarks, addBookmark, removeBookmark };
}

