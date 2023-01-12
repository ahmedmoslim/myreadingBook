import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Input } from 'semantic-ui-react'
import { BookBase } from '../../models/BookBase';
import { RootState } from '../../store/store';
import { SearchResult } from '../searchresult/SearchResult';

function SearchBar(): JSX.Element {

    const [searchTerm, setSearchTerm] = useState("");
    const [bookResults, setSearchResult] = useState([] as BookBase[]);
  
    const books = useSelector<RootState, BookBase[]>((state) => state.books.books) ;
  
    useEffect(()=>{
      searchHandler(searchTerm);
    },[books])
  
    const searchHandler = (event) => {
      setSearchResult([]);
      let searchValue = event;
      if (searchValue.trim() !== "") {
        const newBooks = books.filter((book) => {
          const title = book.title ?? "";
          const authors = book.authors ?? [];
          const isbn = book.industryIdentifiers ?? [];
           return title.toLowerCase().includes(searchValue) 
           || isbn.some(el=>{
              if (el.type.toLocaleLowerCase().includes(searchValue))
                return true;
              else return false;
           })
            || authors.some(el => {
              if (el.toLocaleLowerCase().includes(searchValue))
                return true;
              else return false;
            });
  
        });
        setSearchResult(newBooks);
      }
      else {
        setSearchResult([]);
      }
    }
    const getSearchTerm=(event)=>{
      setSearchTerm(event.target.value);
      searchHandler(event.target.value);
    }
    
    return (
        <>
        <Input icon='search' placeholder='Search...' onChange={getSearchTerm}/>
        <div className="padding-body">
        {bookResults.length>0 && <SearchResult books={bookResults}></SearchResult>}
        </div>
        </>)
    }
export default SearchBar