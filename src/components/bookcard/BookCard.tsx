import React from 'react'
import { Card, Image, Button, Dropdown, DropdownProps } from 'semantic-ui-react'
import { BookBase } from '../../models/BookBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, editShelf } from '../../store/booksSlice';
import { AppDispatch, RootState } from '../../store/store';

const ReadsOptions = [
  {
    key: ' current reading',
    text: ' current reading',
    value: 'currentlyReading',
  },
  {
    key: 'read',
    text: 'read',
    value: 'read',
  },
  {
    key: 'Want to Read',
    text: 'Want to Read',
    value: 'wantToRead',
  },
  {
    key: 'None',
    text: 'None',
    value: 'none',
  },

]

function BookCard({ book }: { book: BookBase }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.books.books);

  const handleChangeCategory = (id: string, data: DropdownProps) => {
    let newBooks = [] as BookBase[];
    books.map((book) => {
      if (book.id === id){
        newBooks = [...newBooks, { ...book, shelf: data.value as string }];
      }
      else {
        newBooks = [...newBooks, book]
      }
      
    })

    dispatch(editShelf({ bookId: id, category: data.value }))
    dispatch((changeCategory(newBooks)))
  }
  return (
    <Card>
    {book.imageLinks &&  <Image src={book?.imageLinks?.thumbnail} wrapped ui={false} />}
      <Card.Content>
       {book.authors && <Card.Header>{book?.authors.map(auther => auther)}</Card.Header>}
      {book.publishedDate &&  <Card.Meta>{book.publishedDate.toString()}</Card.Meta>}
       {book.title && <Card.Description>
          {book.title} </Card.Description>}
      </Card.Content>
      <Card.Content extra>
        <Button basic color='green' onClick={
          () => navigate(`/${book.id}`)}
        >
          View Details
        </Button>
        <span>
          {' '}
          <Dropdown
            inline
            options={ReadsOptions}
            defaultValue={book.shelf}
            onChange={(e, data) => handleChangeCategory(book.id, data)}
          />
        </span>

      </Card.Content>
    </Card>
  )
}
export default BookCard
