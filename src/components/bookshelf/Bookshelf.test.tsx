import React from 'react'
import { Provider } from 'react-redux'
import { getMockedState, store } from '../../store/store'
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import {BookShelf} from './BookShelf'
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MockBooks } from '../../MockBooks'
import { BookBase } from '../../models/BookBase'

test("test book shelf ", async () => {
    const books = MockBooks.books as BookBase[]
    const mockStore = getMockedState({ books: { books: MockBooks.books as BookBase[], book: {} as BookBase} });

    render(<Provider store={mockStore}>
        <Router>
            <BookShelf books={books} shelf="read"/>
        </Router>
    </Provider>)

    const h1 = screen.getByRole('heading');
    expect(h1).toHaveTextContent("read");

})