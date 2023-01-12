import React from 'react'
import BookCard from '../../components/bookcard/BookCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';  
export const Details = () => {
    const book = useSelector((state : RootState) =>state.books.book);
    return(<BookCard book={book}></BookCard>)
}