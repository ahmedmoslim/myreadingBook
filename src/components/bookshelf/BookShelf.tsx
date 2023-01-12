import React from 'react'
import { Grid } from 'semantic-ui-react';
import { BookBase } from '../../models/BookBase';
import BookCard from '../bookcard/BookCard';

export const BookShelf = ({ books, shelf }: { books: BookBase[], shelf?: string }) => {

  const shlfedBooks =shelf!==undefined? books.filter(book => book.shelf === shelf):books;

  return (
    <>

      <h2>{shelf}</h2>
      
      {shlfedBooks.map((book, index) =>
        <BookCard book={book} key={book.id} />
      )} 
     
    </>
  )
}
