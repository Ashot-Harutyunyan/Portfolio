import { createSlice } from '@reduxjs/toolkit'
import { languageData } from '../language/language'

const {eng, arm, rus} = languageData

const languageSlice = createSlice({
    name: 'language',
    initialState: eng,
    reducers: {
        languageEnglish: ()=> {
            return eng
        },
        languageArmenian: ()=> {
            return arm
        },
        languageRussian: ()=> {
            return rus
        }
    }
})

export default languageSlice.reducer
export const {languageEnglish, languageArmenian, languageRussian} = languageSlice.actions