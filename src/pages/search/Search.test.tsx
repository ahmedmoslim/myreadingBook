import React from 'react'
import { Provider } from 'react-redux'
import {  store } from '../../store/store'
import {  render } from "@testing-library/react"
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import {Search} from './Search'

import "@testing-library/jest-dom";


test("test search page ", async () => {

    render(<Provider store={store}>
        <Router>
            <Search/>
        </Router>
    </Provider>)

})