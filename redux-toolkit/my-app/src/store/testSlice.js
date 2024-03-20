import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    count: 0
}

export const testAsyncThunk = createAsyncThunk(
    "asyncThunk", async (payload, thunkAPI) => {
        thunkAPI.dispatch(increament())
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        return await data.json()
    }
)


const testSlice = createSlice({
    name: "test",
    initialState: initialState,
    reducers: {
        increament: (state) => {
            state.count+=1; 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(testAsyncThunk.pending, (state, payload) => {
            console.log("Pending: ", state, payload)
        }),
        builder.addCase(testAsyncThunk.fulfilled, (state, payload) => {
            console.log("Fulfilled: ", payload.payload)
            state.items = payload.payload
        }),
        builder.addCase(testAsyncThunk.rejected, (state, payload) => {
            console.log("Rejected: ", payload.payload)
        })
    }
})

export const { increament } = testSlice.actions;

export default testSlice.reducer;