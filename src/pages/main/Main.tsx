import React, { useEffect } from 'react'
import { BookBase } from '../../models/BookBase';
import { BookList } from '../../components/bookList/BookList';
import { useDispatch, useSelector } from 'react-redux';
import { getbooks } from '../../store/booksSlice';
import { AppDispatch, RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react-is';
import { Button } from 'semantic-ui-react';
export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector<RootState, BookBase[]>((state) => state.books.books);
  useEffect(() => {
      dispatch(getbooks());
  }, []);
    return(
      <>
      <Button className="btn btn-primary" onClick={()=> navigate("/search")}>search</Button>
      <div className="padding-body">
        <BookList books={books}></BookList>
        </div>
        </>
    )
}
