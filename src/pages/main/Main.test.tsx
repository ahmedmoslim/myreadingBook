import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { render } from "@testing-library/react"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import {Main} from './Main'
import "@testing-library/jest-dom";



test("test search page ", async () => {

    render(<Provider store={store}>
        <Router>
            <Main/>
        </Router>
    </Provider>)

})