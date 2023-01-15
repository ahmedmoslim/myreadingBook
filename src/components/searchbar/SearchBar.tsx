import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react'
import { BookBase } from '../../models/BookBase';
import { bookSearch } from '../../store/booksSlice';
import { RootState, AppDispatch } from '../../store/store';
import { SearchResult } from '../searchresult/SearchResult';

function SearchBar(): JSX.Element {

    const books = useSelector<RootState, BookBase[]>((state) => state.books.searchResultBooks) ;
    const dispatch = useDispatch<AppDispatch>();

    const searchHandler = (event) => {
     dispatch(bookSearch({query:event.target.value}))
    }
   
console.log(books)
    return (
        <>
        <Input icon='search' placeholder='Search...' onChange={searchHandler}/>
        <div className="padding-body">
         { <SearchResult books={books}></SearchResult> }
        </div>
        </>)
    }
export default SearchBar