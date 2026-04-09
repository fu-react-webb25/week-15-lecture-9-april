import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://santosnr6.github.io/Data/childrens_books.json')
            .then(response => setBooks(response.data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return { books, isLoading, isError };
}