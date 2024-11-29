import { configureStore } from "@reduxjs/toolkit"
import languageSliceReducer from './languageSlice'

const store = configureStore({
    reducer: {
        language: languageSliceReducer
    }
})

export default store