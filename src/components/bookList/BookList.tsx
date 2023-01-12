import React from 'react';
import { BookBase } from '../../models/BookBase';
import BookCard from '../bookcard/BookCard';
import { Grid, GridColumn } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { BookShelf } from '../bookshelf/BookShelf';

export const BookList = ({ books }: { books: BookBase[] }) => {
    const dispatch = useDispatch<any>()

    return (
        <Grid >
            <Grid><BookShelf books={books} shelf="currentlyReading" /></Grid>
            <Grid><BookShelf books={books} shelf="read" /></Grid>
            <Grid><BookShelf books={books} shelf="wantToRead" /></Grid>
            </Grid>
    )
}
