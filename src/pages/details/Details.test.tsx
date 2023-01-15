import React from 'react'
import { Provider } from 'react-redux'
import { getMockedState, store } from '../../store/store'
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import {Details} from './Details'
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BookBase } from '../../models/BookBase'
import { MockBooks } from '../../MockBooks';

test("test book details ", async () => {
    const mockStore = getMockedState({ books:  {searchResultBooks:[] as BookBase[], books:[], book: MockBooks.books[0] as BookBase} });

    render(<Provider store={mockStore}>
        <Router>
            <Details/>
        </Router>
    </Provider>)

})