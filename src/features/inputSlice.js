import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tasks : [],
}

export const inputSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers : {
        addNewInput :(state, action) => {
           state.tasks.push({
            text : action.payload
           }) 
        }
    }
})

export const {addNewInput} = inputSlice.actions
export default inputSlice.reducer