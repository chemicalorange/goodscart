import { createSlice } from '@reduxjs/toolkit'
import { countTotal } from "./helpers";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        total: 0
    },
    reducers: {
        addGood (state, action) {
            const { items } = state
            const index = Object.keys(action.payload).toString()

            if(items[index] !== undefined) {
                items[index].quantity++
                items[index].fullPrice += items[index].price
                state.total = countTotal(items)
                return
            }
            items[index] = action.payload[index]

            if(items[index].quantity === undefined) {
                items[index].quantity = 1
            }

            if(items[index].fullPrice === undefined) {
                items[index].fullPrice = items[index].price
            }
            state.total = countTotal(items)
            return
        },
        removeGood (state, action) {
            const { items } = state
            const index = action.payload

            delete items[index]
            state.total = countTotal(items)
            return state
        },
        incrementGood (state, action) {
            const { items } = state
            const index = action.payload
            items[index].quantity++
            items[index].fullPrice += items[index].price
            state.total = countTotal(items)
        },
        decrementGood (state, action) {
            const { items } = state
            const index = action.payload

            if(items[index].quantity === 1){
                delete items[index]
                state.total = countTotal(items)
                return
            }
            items[index].quantity--
            items[index].fullPrice -= items[index].price
            state.total = countTotal(items)
        },
        clearCard (state) {
            state = {
                items: {},
                total: 0
            }
            return state
        }
    }
})

export const {addGood, removeGood, incrementGood, decrementGood, clearCard} = cartSlice.actions

export default cartSlice.reducer