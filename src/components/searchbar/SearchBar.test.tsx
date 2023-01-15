import React from 'react'
import { Provider } from 'react-redux'
import { getMockedState, store } from '../../store/store'
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MockBooks } from '../../MockBooks'
import { BookBase } from '../../models/BookBase'

test("test book search ", async () => {
    const mockStore = getMockedState({ books:  {searchResultBooks:[] as BookBase[], books: MockBooks.books as BookBase[], book: {} as BookBase} });

    render(<Provider store={mockStore}>
        <Router>
            <SearchBar/>
        </Router>
    </Provider>)

    const searchBar = screen.getByRole('textbox');
    const user = userEvent.setup();
    await user.type(searchBar, "linux");
})