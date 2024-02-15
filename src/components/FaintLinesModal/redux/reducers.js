import { createReducer } from '@reduxjs/toolkit'
import { modalAddRequest, modalClrRequest, modalDelRequest, modalNowRequest } from './actions'

const initialState = {
    modalQueue: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(modalAddRequest, (state, action) => {
            state.modalQueue.push(action.payload)
        })
        .addCase(modalClrRequest, (state) => {
            state.modalQueue = []
        })
        .addCase(modalDelRequest, (state) => {
            state.modalQueue.shift()
        })
        .addCase(modalNowRequest, (state, action) => {
            state.modalQueue.unshift(action.payload)
        })
})

export default reducer
