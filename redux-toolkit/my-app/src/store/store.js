import {configureStore} from "@reduxjs/toolkit"
import test from "./testSlice";

const store = configureStore({
    reducer: {
        test: test
    }
})

export default store;