import React from 'react'
import { Provider } from 'react-redux'
import { getMockedState, store } from '../../store/store'
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import BookCard from './BookCard'
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MockBooks } from '../../MockBooks'
import { BookBase } from '../../models/BookBase'

test("test book card ", async () => {
    const book = MockBooks.books[0] as BookBase
    const mockStore = getMockedState({ books: {searchResultBooks:[] as BookBase[], books: MockBooks.books as BookBase[], book: {} as BookBase} });

    render(<Provider store={mockStore}>
        <Router>
            <BookCard book={book} />
        </Router>
    </Provider>)

    const list = screen.getByRole("listbox")
    const user = userEvent.setup();
    const option = screen.getByRole('option', { name: 'read' }) as HTMLOptionElement
    await user.click(option)
    expect(list).toBeInTheDocument();
    expect(option).toBeInTheDocument()

})