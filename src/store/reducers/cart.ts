import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Food } from '../../App.tsx'

type CartState = {
    items: Food[]
}

const initialState: CartState = {
    items: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Food>) => {
            const food = action.payload
            const existing = state.items.find(i => i.id === food.id)

            if (existing) {
                existing.quantidade += 1
            } else {
                state.items.push({ ...food, quantidade: 1 })
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id !== action.payload)
        },
        increment: (state, action: PayloadAction<number>) => {
            const item = state.items.find(i => i.id === action.payload)
            if (item) item.quantidade += 1
        }
    }
}
)

export const { add, remove, increment } = CartSlice.actions
export default CartSlice.reducer