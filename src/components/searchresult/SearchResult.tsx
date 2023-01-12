import React from 'react';
import { BookBase } from '../../models/BookBase';
import { Grid, GridColumn } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { BookShelf } from '../bookshelf/BookShelf';

export const SearchResult = ({ books }: { books: BookBase[] }) => {
    const dispatch = useDispatch<any>()

    return (
        <Grid >
            <Grid><BookShelf books={books} /></Grid>
            </Grid>
    )
}
