import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Api } from "../ApiControl/Api";
import { BookBase } from "../models/BookBase";

export const getbooks = createAsyncThunk<BookBase[], void>("books/getBooks", async () => {
    const {baseUrl, headers} = Api();

    const books = await fetch(`${baseUrl}/books`, { headers })
        .then((res) => res.json())
        .then((data) => data.books);
        return books
});

export const editShelf = createAsyncThunk<any, any>("books/editShelf", async ({bookId,category}) => {
    const {baseUrl, headers} = Api();

console.log(category)
    const books = await  fetch(`${baseUrl}/books/${bookId}`, {
        method: "PUT",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shelf:category }),
      }).then((res) => res.json());
        return books
});
export const bookSearch = createAsyncThunk<BookBase[], any>("books/bookSearch", async ({ query }) => {
    const {baseUrl, headers} = Api();
    const searchResult = await fetch(`${baseUrl}/search`, {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, maxResults:10 }),
      })
        .then((res) => res.json())
        .then((data) => data.books);
        return searchResult;
});
export const getBook = createAsyncThunk<BookBase, any>("books/getBook", async ({bookId}) => {
    const {baseUrl, headers} = Api();

    const book = await   fetch(`${baseUrl}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);
        return book
});

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books:[] as BookBase[],
        book:{} as BookBase,
        searchResultBooks:[] as BookBase[] 
    },
    reducers: {
        changeCategory: (state, action) => {
            state.books = action.payload 
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getbooks.pending,(state, action)=>{
            console.log("Fetching Data...");
        })
        builder.addCase(getbooks.fulfilled,(state, action)=>{
            console.log(state);
            state.books = action.payload
        })
        builder.addCase(editShelf.pending,(state, action)=>{
            console.log("editing Book category...");
        })
        builder.addCase(editShelf.fulfilled,(state, action)=>{
            console.log(action.payload)
        })
        builder.addCase(getBook.pending,(state, action)=>{
            console.log("fetching Book ...");
        })
        builder.addCase(getBook.fulfilled,(state, action:PayloadAction<BookBase>)=>{
            state.book = action.payload as BookBase
        })
        builder.addCase(bookSearch.pending,(state, action)=>{
            console.log("searching books...");
        })
        builder.addCase(bookSearch.fulfilled,(state, action)=>{
            console.log(action.payload)
            state.searchResultBooks = action.payload
        })
    }
})

export const { changeCategory } = bookSlice.actions;
export default bookSlice.reducer;